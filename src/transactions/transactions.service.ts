import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import {readFile} from '../utils/readFile'
import {writeFile } from '../utils/writeFile'


const locationItem = './DB/item.json' 
const locationBudget = './DB/Budget.json' 

@Injectable()
export class TransactionsService {
  async create(createTransactionDto: CreateTransactionDto) {
    const data = await readFile(locationItem)
    const newItem = {
      hasImage: false,
      ...createTransactionDto
    }
    let dolars = await readFile(locationBudget)
    if(data.length === 0) {
      if((newItem.pricePerUnit * newItem.quantity) <= dolars.currentBudget ){
        data.push(newItem)
       await writeFile(locationItem, data)
       dolars -= (newItem.pricePerUnit * newItem.quantity)
       await writeFile(locationBudget, dolars)

       return {result: {id:newItem.id,newQuantity:1, spent: dolars }}
      }
      else{
        return {msg: "There is not enough money to buy"}
      }
      }
    for(let item of data){
      if (item.id === newItem.id){
        if((newItem.pricePerUnit * newItem.quantity) <= dolars.currentBudget ){
        item.quantity += 1
        const sum = item.quantity
        dolars -= (newItem.pricePerUnit * newItem.quantity)
        const sumDolar = dolars
        await writeFile(locationBudget, dolars)
        await writeFile(locationItem, data)
        return{result:{id:item.id, newQuantity: sum, spent: sumDolar}}

      } else {
        return {msg: "There is not enough money to buy"}
      }
    } 
  }
  if((newItem.pricePerUnit * newItem.quantity) <= dolars.currentBudget ){
    data.push(newItem)
    dolars -= (newItem.pricePerUnit * newItem.quantity)
    const sumDolar = dolars
    await writeFile(locationBudget, dolars)
    await writeFile(locationItem, data)
    return {result:{id:newItem.id, newQuantity: newItem.quantity, spent: sumDolar}}
  } else{
    return {msg: "There is not enough money to buy"}
  }
}
}
