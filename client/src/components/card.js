import { Box, Image } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";






const req = require('axios');

export default function BasicCard(props) {
  const { results } = props.recipeDetails;
  // const [id, setid] = useState('')
  const navigate = useNavigate()
  console.log(results);

  // const [data, setData] = useState({})
  const changePage =async (id) => {
    const response = await req.post('http://127.0.0.1:5000/recipe/' + id);
      const data = await response.data;

      console.log('data',data);
      navigate('/details',{
        state:data,
      })
      console.log(response.data);

  }
  

  return (
    <div>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {
          results.map((result) => (
             <Image
              src={result.image}
              alt={result.title}
              title={result.title}
              onClick={() => { changePage(result.id) }} // selects or unselects the image?
            />
              
            
          ))
      }
      </Box>
  
    </div>
  );
}