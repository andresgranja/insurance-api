import { ApiProperty } from '@nestjs/swagger';

export class CreatePolicyDto {
  @ApiProperty({ example: 'POLICY123', description: 'Unique policy number' })
  policyNumber: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Name of the policy holder',
  })
  holderName: string;

  @ApiProperty({ example: 100.0, description: 'Premium amount' })
  premiumAmount: number;
}
