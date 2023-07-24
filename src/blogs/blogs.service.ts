import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './entities/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

const generateUrl = (string: string) => {
    return string.toLowerCase().replace(/ /g, '-')
  }

@Injectable()
export class BlogsService {

    constructor(@InjectModel(Blog.name) private blogs: mongoose.Model<Blog>){
    }

    async createBlog(createBlogDto: CreateBlogDto){
        console.log(createBlogDto)
        createBlogDto.url = generateUrl(createBlogDto.title) 
        return await this.blogs.create(createBlogDto)
    }



}
