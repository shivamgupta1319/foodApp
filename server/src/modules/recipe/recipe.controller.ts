import { Controller, Get, Param, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Get(":recipeName")
    public getrecipe(@Param('recipeName') recipeName) {
        return this.recipeService.find(recipeName);
    }

    @Post(":id")
    public get_id(@Param('id') id) {    return this.recipeService.create(id); }
}


