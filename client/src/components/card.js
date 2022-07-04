import { Box, Image } from '@chakra-ui/react'
import RecipeCard from './showRecipe';
import { useState } from 'react';





const req = require('axios');
export default function BasicCard(props) {
  const { results } = props.recipeDetails;
  // const [id, setid] = useState('')

  console.log(results);

  const [data, setData] = useState({})
  const changePage = (id) => {
    req.post('http://127.0.0.1:5000/recipe/' + id).then((response) => {
      setData(response.data);
      console.log(response.data);

    })
  }

  return (
    <div>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {
          results.map((result) => (
             <Image
              src={result.image}
              alt={result.title}
              
              onClick={() => { changePage(result.id) }} // selects or unselects the image?
            />
              
            
          ))
      }
      </Box>
      {Object.keys(data).length > 0 && <RecipeCard recipeData={data} />}
  
    </div>
  );
}