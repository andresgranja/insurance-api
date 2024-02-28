import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InsuranceService } from './insurance.service';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@ApiTags('Policies')
@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new insurance policy' })
  @ApiResponse({
    status: 201,
    description: 'The policy has been successfully created.',
  })
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
