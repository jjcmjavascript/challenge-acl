export interface CreateContractDto {
  clientName: string;
  email: string;
  initialDate?: Date;
  accountNumber?: number;
  amount?: bigint;
  currency?: string;
}
