import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('products')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get('products')
  findAll() {
    return this.productsService.getAllProducts()
  }

  @Get(':category')
  findCategory(@Param("category") category : string){
    return this.productsService.getProductsByCategory(category)
  }
}
