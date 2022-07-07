import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  public recipeName: string;


}