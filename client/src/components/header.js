import React from 'react';
import BasicCard from './card';
import { VStack } from '@chakra-ui/layout';
import { Input, Button, Heading, FormControl } from '@chakra-ui/react'
import { useState } from 'react'
import { BACKGROUNDCOLOR } from '../constant/constant.header';
import { recipeData } from '../api/api.header';
 
// const req = require('axios');

export default function Header(){
    const [recipeName, setRecipeName] = useState('')
    const [data, setData] = useState({})
    const fun = (event) => {
      console.log(event.target.value);
    setRecipeName(event.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
    const data = await recipeData(recipeName)
    console.log(data);
    // req.get('http://127.0.0.1:5000/recipe/' + recipeName).then((response) => {
      setData(data);
    }

    return(
        <VStack pl={10} pr={10} pt={20} bg={BACKGROUNDCOLOR} >
          <form onSubmit ={(e) =>  handleSubmit(e)} >
            <FormControl align="center" isRequired >
              <Heading fontSize={70} fontWeight='bold' color='#9B2C2C' align='center'>Food Recipe</Heading>
              
              <Input size='lg' variant='outline' type="text" onChange={fun} value={recipeName} name='recipeName' placeholder='EnterRecipeName' />
              <Button colorScheme='red' size='lg' type='submit'  value={"submit"} >SEARCH</Button>
            </FormControl>
          </form>
          {Object.keys(data).length > 0 && <BasicCard  recipeDetails={data} />}

        </VStack>
    )
}