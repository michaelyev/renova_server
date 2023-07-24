import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogDto {
    
    @IsString()
    @IsNotEmpty()
    url: string;
    @IsString()
    @IsNotEmpty()
    readingTime: string;
    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsNotEmpty()
    image: string;
    @IsString()
    @IsNotEmpty()
    body: string
    @IsString()
    @IsNotEmpty()
    type: string

}
