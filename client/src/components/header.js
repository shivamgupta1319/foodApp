import React from 'react';
import BasicCard from './card';
import { VStack } from '@chakra-ui/layout';
import { Input, Button, Heading, FormControl } from '@chakra-ui/react'
import { useState } from 'react'
import { BUTTONCOLOR, HEADERCOLOR, MARGINBOTTOM } from '../constant/constant.header';
import { recipeData } from '../api/api.header';

// const req = require('axios');

export default function Header() {
  const [recipeName, setRecipeName] = useState('')
  const [data, setData] = useState({})
  const fun = (event) => {
    console.log(event.target.value);
    setRecipeName(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await recipeData(recipeName)
    setData(data);
  }

  return (
    <VStack pl={10} pr={10} pt={20}>
      <form onSubmit={(e) => handleSubmit(e)} >
        <FormControl align="center" isRequired marginBlock="10%">
          <Heading marginBottom={MARGINBOTTOM} fontSize={70} fontWeight='bold' color={HEADERCOLOR} align='center'>Food Recipe</Heading>

          <Input marginBottom={MARGINBOTTOM} size='lg' variant='outline' type="text" onChange={fun} value={recipeName} name='recipeName' placeholder='Enter Recipe Name' />
          <Button colorScheme={BUTTONCOLOR} size='lg' type='submit' value={"submit"} >SEARCH</Button>
        </FormControl>
      </form>
      {Object.keys(data).length > 0 && <BasicCard recipeDetails={data} />}

    </VStack>
  )
}