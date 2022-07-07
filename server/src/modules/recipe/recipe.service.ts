import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeModel } from './recipe.entity';
import { getRecipeData, getRecipeDetails } from 'src/api/getRecipeData.api';

@Injectable()
export class RecipeService {
    @InjectRepository(RecipeModel) private readonly repository: Repository<RecipeModel>
    constructor(private configService: ConfigService){}



    public async find(recipeName: string): Promise<any>{
        
        const key = this.configService.get<string>('API_KEY');
        const data = await getRecipeData(recipeName,key);
        return data
    }


    public async create(id: number){
        const key = this.configService.get<string>('API_KEY')
        const data = await getRecipeDetails(id,key);
        
        const recipe:RecipeModel = new RecipeModel();
        recipe.aisle = data.extendedIngredients[0].aisle;
        recipe.url = data.image,
        recipe.consistency = data.extendedIngredients[0].consistency,
        recipe.name = data.title,
        recipe.original = data.extendedIngredients[0].original,
        recipe.instructions = data.instructions

        return this.repository.save(recipe);
        
    }         
}

