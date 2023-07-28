import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
   create(@Body() createBlogDto: CreateBlogDto){
    console.log(createBlogDto)
     return this.blogsService.createBlog(createBlogDto)
  }

  @Get()
  findAll(){
    return this.blogsService.getAllBlogs()
  }


  @Get(':url')
  findBlog(@Param('url') url: string){
    return this.blogsService.getBlog(url)
  }

  

}
