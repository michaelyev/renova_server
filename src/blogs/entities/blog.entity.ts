import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';

enum Categories {
  Countertops = 'countertops',
  Cabinets = 'cabinets',
  Tile = 'tile'
}

@Schema({ versionKey: false, toJSON: { transform: (doc, ret) => { delete ret._id; } } })
export class Blog{

    @Prop({type: String, unique: true})
    url: string

    @Prop({default: now(), required: true})
    date: Date;

    @Prop({type: String, required: true})
    readingTime: string;

    @Prop({type: String, required: true})
    title: string;

    @Prop({type: String, required: true})
    image: string;

    @Prop({type: String, required: true})
    body: string

    @Prop({ type: String, enum: Categories, required: true })
    type: Categories;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
