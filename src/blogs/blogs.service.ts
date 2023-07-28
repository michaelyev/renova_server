import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './entities/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';


const generateUrl = (string: string) => {
    return string.toLowerCase().replace(/ /g, '-')
  }

  const types = ['cabinets', 'countertops', 'tile']

@Injectable()
export class BlogsService {

    constructor(@InjectModel(Blog.name) private blogs: mongoose.Model<Blog>){
    }

    async createBlog(createBlogDto: CreateBlogDto){
        console.log('createBlogDto.title:', createBlogDto.title);

        createBlogDto.url = generateUrl(createBlogDto.title) 
        return await this.blogs.create(createBlogDto)
    }

    async getAllBlogs(){
        return await this.blogs.find()
    }


    async getBlog(url: string){
        
      if (!types.includes(url)) {
        return await this.blogs.findOne().where({ url });
      }
      return await this.blogs.find().where({ type: url });

      
    }

    





}
