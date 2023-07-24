import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body()createBlogDto: CreateBlogDto){
    console.log(createBlogDto)
    return this.blogsService.createBlog(createBlogDto)
  }

  /* @Get('blogs')
  findAll(){

  }

  @Get(':blog')
  findCategory(){

  } */

}
