import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
} from 'class-validator';

import { Transform } from 'class-transformer';

export class CreateContractDto {
  @IsNotEmpty()
  @IsString()
  readonly clientName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    const numericValue = value.toString().replace(/\D/g, '');
    return parseInt(numericValue, 10);
  })
  readonly accountNumber?: number;

  @IsOptional()
  @IsNumber()
  readonly amount?: bigint;

  @IsOptional()
  @IsString()
  readonly currency?: string;
}
