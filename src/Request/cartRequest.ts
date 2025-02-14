import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class addCart{
    @IsNumber()
    @IsNotEmpty()
    user_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    total_price!: number;

   
}