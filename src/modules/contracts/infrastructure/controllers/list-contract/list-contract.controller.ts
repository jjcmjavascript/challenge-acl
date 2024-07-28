import { Get, Controller, UseFilters, Query } from '@nestjs/common';
import { ListContractControllerDto } from './list-contract.controller.dto';
import { ListContract } from '@contracts/application/list/list-contract';
import { ExceptionFilter } from '@shared/filters/exception-filter';

@Controller('contractList')
export class ListContractController {
  constructor(private readonly service: ListContract) {}

  @Get()
  @UseFilters(new ExceptionFilter())
  async execute(@Query() contract: ListContractControllerDto) {
    return this.service.execute(contract);
  }
}
