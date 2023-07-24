import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { BlogsModule } from './blogs/blogs.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://renova_admin:renova1995@renova.gyyshpk.mongodb.net/?retryWrites=true&w=majority'), ProductsModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

