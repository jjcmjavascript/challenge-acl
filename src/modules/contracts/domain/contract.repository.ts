import { Contract } from './contract.entity';
import {
  ContractListInterface,
  CreateContractInterface,
} from './contract.interface';

export abstract class ContractRepository {
  abstract get(query: ContractListInterface): Promise<Contract[]>;
  abstract create(contract: CreateContractInterface): Promise<Contract | null>;
}
