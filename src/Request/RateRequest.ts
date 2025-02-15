import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsString,
  IsOptional,
} from "class-validator";

export class AddRate {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rate: number;

  @IsString()
  @IsOptional()
  comment: string;
} 

export class updateRate {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Max(5)
  @Min(1)
  rate: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  comment: string;
}
