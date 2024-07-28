import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class ListContractControllerDto {
  @IsOptional()
  @IsNumber()
  accountNumber?: number;

  @IsOptional()
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsDate()
  endDate?: Date;
}
