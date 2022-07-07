import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModel } from './recipe.entity';


@Module({
  imports:[TypeOrmModule.forFeature([RecipeModel])],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
