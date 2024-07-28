import { ContractInterface } from './contract.interface';

export class Contract {
  private id: number;
  private clientName: string;
  private email: string;
  private initialDate: Date;
  private accountNumber: number;
  private amount: bigint;
  private currency: string;

  constructor(private value: ContractInterface) {
    this.id = value.id;
    this.clientName = value.clientName;
    this.email = value.email;
    this.initialDate = value.initialDate;
    this.accountNumber = value.accountNumber;
    this.amount = value.amount;
    this.currency = value.currency;
  }

  static create(value: ContractInterface): Contract {
    return new Contract({
      ...value,
    });
  }

  toObject(): Record<string, any> {
    return {
      ...this.value,
      amount: this.amount.toString(),
    };
  }
}
