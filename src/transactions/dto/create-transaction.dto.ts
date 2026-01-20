import { IsString, IsNumber, IsNotEmpty} from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    id : string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNumber()
    @IsNotEmpty()
    pricePerUnit: number
}
