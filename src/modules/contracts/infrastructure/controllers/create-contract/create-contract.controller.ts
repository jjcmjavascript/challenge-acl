import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { CreateContract } from '@contracts/application/create/create-contract';
import { CreateContractDto } from './create-contract.controller.dto';
import { ExceptionFilter } from '@shared/filters/exception-filter';

@Controller('contracts')
export class CreateContratController {
  constructor(private readonly service: CreateContract) {}

  @Post()
  @HttpCode(201)
  @UseFilters(new ExceptionFilter())
  async execute(@Body() contract: CreateContractDto) {
    await this.service.execute(contract);
  }
}
