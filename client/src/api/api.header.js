import { instance } from "../config/config.axios";


export async function recipeData (recipeName){
    const response = await instance.get(recipeName);
    const data = await response.data;
    
    return data;
}