import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';


/* imports: [
  MongooseModule.forFeature([
    {
      name: Event.name,
      schema: EventSchema,
      discriminators: [
        { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
        { name: SignUpEvent.name, schema: SignUpEventSchema },
      ],
    },
  ]),
] */

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})

export class ProductsModule {}
