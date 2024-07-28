import { Contract } from '@contracts/domain/contract.entity';
import { ContractRepository } from '@contracts/domain/contract.repository';
import { CustomInjectable } from '@shared/decorators/custom-injectable';
import { CreateContractDto } from './create-contract.dto';

@CustomInjectable()
export class CreateContract {
  constructor(private readonly respository: ContractRepository) {}

  async execute(contract: CreateContractDto): Promise<Contract> {
    return this.respository.create(contract);
  }
}
