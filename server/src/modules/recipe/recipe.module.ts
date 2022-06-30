import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/core/database/database.module';
import { foodModule } from 'src/modules/FoodAppModule/foodRecipe.module';

@Module({
  imports:[ConfigModule, DatabaseModule, foodModule],
  providers: [RecipeService],
  controllers: [RecipeController],
  exports:[RecipeService]
})
export class RecipeModule {}
