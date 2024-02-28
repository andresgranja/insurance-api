import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InsurancePolicy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: string;

  @Column()
  holderName: string;

  @Column('decimal', { precision: 5, scale: 2 })
  premiumAmount: number;
}
