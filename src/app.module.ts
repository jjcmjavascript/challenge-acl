import { Module } from '@nestjs/common';
import { ContractModule } from '@contracts/infrastructure/contract.module';

@Module({
  imports: [ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
