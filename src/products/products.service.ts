import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import mongoose from 'mongoose';

const generateUrl = (string: string) => {
  return string.toLowerCase().replace(/ /g, '-')
}

const types = ['cabinets', 'countertops', 'tile']


@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private products: mongoose.Model<Product>){
  }

  async createProduct(createProductDto: CreateProductDto) {
    const { manufacturer, title } = createProductDto;
    createProductDto.url = generateUrl(manufacturer) + '_' +generateUrl(title)
    return await this.products.create(createProductDto)
  }

  async getAllProducts(){
    return await this.products.find()
  }

 

  async getProduct(url: string){
        
    if (!types.includes(url)) {
      return await this.products.findOne().where({ url });
    }
    return await this.products.find().where({ type: url });

    
  }

}
