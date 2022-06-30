import { Controller, Get, Param, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Get(":recipe_name")
    public getrecipe(@Param('recipe_name') recipe_name) {
        return this.recipeService.find(recipe_name);
    }

    @Post(":id")
    public get_id(@Param('id') id) {    return this.recipeService.create(id); }
}


