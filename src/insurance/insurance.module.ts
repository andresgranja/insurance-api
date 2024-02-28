import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceService } from './insurance.service';
import { InsuranceController } from './insurance.controller';
import { InsurancePolicy } from './insurance-policy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InsurancePolicy])],
  controllers: [InsuranceController],
  providers: [InsuranceService],
})
export class InsuranceModule {}
