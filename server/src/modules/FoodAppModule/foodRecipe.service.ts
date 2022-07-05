import { Inject, Injectable } from '@nestjs/common';
import { FOOD_REPOSITORY } from 'src/core/database/constants';
import { FoodRecipe } from './foodRecipe.entity';

@Injectable()
export class foodService {
    constructor(@Inject(FOOD_REPOSITORY) private readonly foodRepository: typeof FoodRecipe) { }
}
