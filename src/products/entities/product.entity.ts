import { Schema,  Prop, SchemaFactory  } from "@nestjs/mongoose";

enum Categories {
  Countertops = 'countertops',
  Cabinets = 'cabinets',
  Tile = 'tile'
}

@Schema()
export class Product {

  @Prop({type: String, unique: true})
  url: string

  @Prop({ type: String, required: true })
  manufacturer: string;

  @Prop({ type: String, required: true })
  model: string;

  @Prop({ type: String, required: true })
  size: string;

  @Prop({ type: String, required: true })
  productName: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  productCode: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: true })
  status: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String })
  rating: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String })
  discountedPrice: number;

  @Prop({ type: String, required: true })
  purpose: string;

  @Prop({ type: String })
  surface: string;

  @Prop({ type: String })
  design: string;

  @Prop({ type: String })
  material: string;

  @Prop({ type: String, enum: Categories })
  type: Categories;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
