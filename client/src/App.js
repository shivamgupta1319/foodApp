

import { useState } from 'react'
import BasicCard from './components/card';
import {VStack} from '@chakra-ui/layout';
import { Input, Button , Heading} from '@chakra-ui/react'
const req = require('axios');
function App() {


  const [recipe_name, setRecipeName] = useState('')
  const [data, setData] = useState({})
  const fun = (event) => {
    setRecipeName(event.target.value);
    
  }

  const handleSubmit = () => {
    req.get('http://127.0.0.1:5000/recipe/' + recipe_name).then((response) => {
        setData(response.data);
        
    })
  }

  return (
    <VStack align='center' >
      
    
      <Heading>Food Recipe</Heading>
      <br></br><br></br>
      <Input size='lg' variant='outline' type="text" onChange={fun} value={recipe_name} name='recipe_name' placeholder='Enter Recipe Name' /><br></br><br></br><br></br>
      <Button colorScheme='teal' size='lg' type='submit' value={"submit"} onClick={() => {handleSubmit()}} >SUBMIT</Button>
    
    <br></br><br></br>
      { Object.keys(data).length > 0 && <BasicCard key={data.totalResults} recipeDetails={data}/>}
    </VStack>


  );
}

export default App;
