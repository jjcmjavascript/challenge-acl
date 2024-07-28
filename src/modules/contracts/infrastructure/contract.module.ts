import { Module } from '@nestjs/common';
import { CreateContract } from '@contracts/application/create/create-contract';
import { CreateContratController } from '@contracts/infrastructure/controllers/create-contract/create-contract.controller';
import { ListContractController } from '@contracts/infrastructure/controllers/list-contract/list-contract.controller';
import { ContractDdRepository } from './respositories/contract-db.respository';
import { PrismaService } from '@shared/prisma/prisma.service';
import { ContractRepository } from '@contracts/domain/contract.repository';
import { ListContract } from '@contracts/application/list/list-contract';

@Module({
  controllers: [CreateContratController, ListContractController],
  providers: [
    PrismaService,
    ContractDdRepository,
    {
      provide: ContractRepository,
      useExisting: ContractDdRepository,
    },
    CreateContract,
    ListContract,
  ],
  exports: [CreateContract],
})
export class ContractModule {}
