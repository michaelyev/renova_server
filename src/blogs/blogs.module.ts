import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './entities/blog.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Blog.name, schema: BlogSchema}])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
