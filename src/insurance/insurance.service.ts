import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsurancePolicy } from './insurance-policy.entity';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@Injectable()
export class InsuranceService {
  constructor(
    @InjectRepository(InsurancePolicy)
    private readonly insurancePolicyRepository: Repository<InsurancePolicy>,
  ) {}

  create(createPolicyDto: CreatePolicyDto): Promise<InsurancePolicy> {
    const policy = this.insurancePolicyRepository.create(createPolicyDto);
    return this.insurancePolicyRepository.save(policy);
  }

  findAll(): Promise<InsurancePolicy[]> {
    return this.insurancePolicyRepository.find();
  }

  findOne(id: number): Promise<InsurancePolicy> {
    return this.insurancePolicyRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updatePolicyDto: UpdatePolicyDto,
  ): Promise<InsurancePolicy> {
    await this.insurancePolicyRepository.update(id, updatePolicyDto);
    return this.insurancePolicyRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    const policy = await this.insurancePolicyRepository.findOne({
      where: { id },
    });
    if (!policy) {
      throw new NotFoundException(`Insurance Policy with ID ${id} not found`);
    }

    await this.insurancePolicyRepository.delete(id);
  }
}
