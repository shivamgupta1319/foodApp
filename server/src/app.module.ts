import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './modules/recipe/recipe.module';
import { DatabaseModule } from './core/database/database.module';
import { foodModule } from './modules/FoodAppModule/foodRecipe.module';

@Module({
  
  imports: [RecipeModule, DatabaseModule,ConfigModule.forRoot({
    envFilePath:'./env',
    isGlobal: true
  }), DatabaseModule, foodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
