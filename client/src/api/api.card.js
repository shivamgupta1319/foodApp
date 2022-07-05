import { instance } from "../config/config.axios";


export async function recipeDetail (id){
    const idno = id.toString(); 
    const response = await instance.post(idno);
    const data = await response.data;
    
    return data;
}