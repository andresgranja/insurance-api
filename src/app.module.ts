import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceModule } from './insurance/insurance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type
      host: 'localhost', // Database host
      port: 5432, // Database port
      username: 'your_username', // Database username
      password: 'your_password', // Database password
      database: 'your_database_name', // Database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entities
      synchronize: true, // Synchronize the database with your entities (not recommended for production)
    }),
    InsuranceModule,
  ],
})
export class AppModule {}
