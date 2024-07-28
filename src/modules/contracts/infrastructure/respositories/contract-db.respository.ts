import { ContractRepository } from '@contracts/domain/contract.repository';
import { PrismaService } from '@shared/prisma/prisma.service';
import { Contract } from '@contracts/domain/contract.entity';
import { ContractListInterface } from '@contracts/domain/contract.interface';
import { CustomInjectable } from '@shared/decorators/custom-injectable';

const getWhere = (query: ContractListInterface) => {
  const where: Record<string, any> = {
    AND: [],
  };

  if (query.accountNumber) {
    where.accountNumber = query.accountNumber;
  }

  if (query.startDate) {
    where.AND.push({
      initialDate: {
        gte: query.startDate,
      },
    });
  }

  if (query.endDate) {
    where.AND.push({
      initialDate: {
        lte: query.endDate,
      },
    });
  }

  return where;
};

@CustomInjectable()
export class ContractDdRepository implements ContractRepository {
  constructor(private readonly repository: PrismaService) {}

  async get(query: ContractListInterface): Promise<Contract[]> {
    const contracts = await this.repository.contract.findMany({
      where: getWhere(query),
    });

    const formated = contracts.map((contract) => new Contract(contract));

    return formated;
  }

  async create(contract): Promise<Contract | null> {
    const newContract = await this.repository.contract.create({
      data: contract,
    });

    return new Contract(newContract);
  }
}
