export interface ContractInterface {
  id: number;
  clientName: string;
  email: string;
  initialDate: Date;
  accountNumber?: number;
  amount?: bigint;
  currency?: string;
}

export interface CreateContractInterface {
  clientName: string;
  email: string;
  initialDate?: Date;
  accountNumber?: number;
  amount?: bigint;
  currency?: string;
}

export interface ContractListInterface {
  accountNumber?: number;
  startDate?: Date;
  endDate?: Date;
}
