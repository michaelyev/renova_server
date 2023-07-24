import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import mongoose from 'mongoose';

const generateUrl = (string) => {
  return string.toLowerCase().replace(/ /g, '-')
}

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private products: mongoose.Model<Product>){
  }

  async createProduct(createProductDto: CreateProductDto) {
    const { manufacturer, model } = createProductDto;
    createProductDto.url = generateUrl(manufacturer) + '_' +generateUrl(model)
    return await this.products.create(createProductDto)
  }

  async getAllProducts(){
    return await this.products.find()
  }

  async getProductsByCategory(category: string) {
    return await this.products.find().where({ type: category })
  }

}
