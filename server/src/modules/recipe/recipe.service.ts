import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FOOD_REPOSITORY } from 'src/core/database/constants';
import { FoodRecipe } from 'src/modules/FoodAppModule/foodRecipe.entity';


@Injectable()
export class RecipeService {
    constructor(private configService: ConfigService,@Inject(FOOD_REPOSITORY) private readonly foodrecipe: typeof FoodRecipe){}

    
     
    public async find(recipe_name: string): Promise<any>{
        
        const key = this.configService.get<string>('API_KEY')
        const axios = require("axios"); 
        const options = {
        method: 'get',
        url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey='+key,
        params: {query: recipe_name}
        };

        const response = await axios.request(options)
        const data = await response.data;
        console.log (data)
        

        return await data
    }


    public async create(id: number){
        const key = this.configService.get<string>('API_KEY')
        console.log (key)
        const axios = require("axios"); 
        const options = {
        method: 'get',
        url: 'https://api.spoonacular.com/recipes/'+id+'/information?apiKey='+key
        };

        const response = await axios.request(options)
        const data = await response.data;
        const result = {
            aisle: data.extendedIngredients[0].aisle,
            url: data.image,
            consistency: data.extendedIngredients[0].consistency,
            name: data.title,
            original: data.extendedIngredients[0].original,
            instructions : data.instructions
        }
        console.log (data)
        

        return await this.foodrecipe.create<FoodRecipe>(result);
    }         
}

