import { Contract } from '@contracts/domain/contract.entity';
import { ContractRepository } from '@contracts/domain/contract.repository';
import { ListContractDto } from './list-contract-dto';
import { CustomInjectable } from '@shared/decorators/custom-injectable';

@CustomInjectable()
export class ListContract {
  constructor(private readonly respository: ContractRepository) {}

  async execute(query: ListContractDto): Promise<Contract[]> {
    return this.respository.get(query);
  }
}
