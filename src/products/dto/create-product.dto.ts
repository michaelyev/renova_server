import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  url: string;
  @IsString()
  @IsNotEmpty()
  manufacturer: string;
  @IsString()
  model: string;
  @IsString()
  size: string;
  @IsString()
  productName: string;
  @IsString()
  title: string;
  @IsString()
  productCode: string;
  @IsString()
  image: string;
  @IsString()
  status: string;
  @IsString()
  description: string;
  @IsInt()
  rating: number;
  @IsInt()
  price: number;
  @IsInt()
  discountedPrice: number;
  @IsString()
  purpose: string;
  @IsString()
  surface: string;
  @IsString()
  design: string;
  @IsString()
  material: string;
  @IsString()
  type: string;
}
