import { IsDate, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class ListContractControllerDto {
  @IsOptional()
  @Transform(({ value }) => {
    const numericValue = value.toString().replace(/\D/g, '');
    return parseInt(numericValue, 10);
  })
  @IsNumber()
  accountNumber?: number;

  @IsOptional()
  @Transform(({ value }) => {
    return new Date(value);
  })
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @Transform(({ value }) => {
    return new Date(value);
  })
  @IsDate()
  endDate?: Date;
}
