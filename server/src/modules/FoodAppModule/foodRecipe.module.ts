import { Module } from '@nestjs/common';
import { foodProviders } from './foodRecipe.providers';
import { foodService } from './foodRecipe.service';

@Module({
    providers: [foodService, ...foodProviders],
    exports: [foodService,...foodProviders],
})
export class foodModule {}
