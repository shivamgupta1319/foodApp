import { FoodRecipe } from './foodRecipe.entity';
import { FOOD_REPOSITORY } from '../../core/database/constants';

export const foodProviders = [{
    provide: FOOD_REPOSITORY,
    useValue: FoodRecipe,
}];