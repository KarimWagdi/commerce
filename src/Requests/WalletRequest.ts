import {
    IsNotEmpty,
    IsNumber,
    Min,
    Max,
    IsString,
    IsOptional,
  } from "class-validator";
  
  export class AddWallet {
    @IsNumber()
    @IsNotEmpty()
    userId: number;
  
    @IsNumber()
    @IsNotEmpty()
    balance: number;
  } 
  
  export class updateWallet {
    @IsNumber()
    @IsNotEmpty()
    userId: number;
  
    @IsNumber()
    @IsNotEmpty()
    balance: number;
  
  }