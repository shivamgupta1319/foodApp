
import axios from 'axios';


export async function getRecipeData(recipeName, key) {

    const options = {
        method: 'get',
        url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + key,
        params: { query: recipeName }
    };
    const response = await axios.request(options)
    const data = await response.data;
    console.log(data)
    return await data;
}

export async function getRecipeDetails(id, key){

    console.log(key)
    const options = {
        method: 'get',
        url: 'https://api.spoonacular.com/recipes/' + id + '/information?apiKey=' + key
    };

    const response = await axios.request(options)
    const data = await response.data;
    console.log(data)
    return await data;
}
