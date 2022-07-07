import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './core/typeorm/typeorm.service';
import { RecipeModule } from './modules/recipe/recipe.module';
@Module({
  
  imports: [ConfigModule.forRoot({
    envFilePath:'./env',
    isGlobal: true
  }),TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
