import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Post()
  create(@Body() createPolicyDto: CreatePolicyDto) {
    return this.insuranceService.create(createPolicyDto);
  }

  @Get()
  findAll() {
    return this.insuranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolicyDto: UpdatePolicyDto) {
    return this.insuranceService.update(+id, updatePolicyDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.insuranceService.delete(+id);
  }
}
