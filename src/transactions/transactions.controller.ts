import { Controller, Post , Body, ValidationPipe} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';


@Controller('transactions/purchase')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

@Post()
create(@Body(ValidationPipe) createTransactionDto: CreateTransactionDto){
  return this.transactionsService.create(createTransactionDto)
}
}
