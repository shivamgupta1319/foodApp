import React from 'react';
import BasicCard from './card';
import { VStack } from '@chakra-ui/layout';
import { Input, Button, Heading, FormControl } from '@chakra-ui/react'
import { useState } from 'react'
import { BUTTONCOLOR, HEADERCOLOR, MARGINBOTTOM } from '../constant/constant.header';
import { recipeData } from '../api/api.header';
import { useForm } from "react-hook-form";


export default function Header() {
  const { register, handleSubmit } = useForm();
  const [recipeName, setRecipeName] = useState('')
  const [data, setData] = useState({})
  



  const fun = (event) => {

    setRecipeName(event.target.value);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await recipeData(recipeName)
    setData(data);
  }

  return (
    <VStack pl={10} pr={10} pt={20}>
      <form onSubmit={(e) => handleSubmit(submitForm(e))} >
        <FormControl align="center" isRequired marginBlock="10%">
          <Heading marginBottom={MARGINBOTTOM} fontSize={70} fontWeight='bold' color={HEADERCOLOR} align='center'>Food Recipe</Heading>

          <Input {...register("recipeName", { required: true, maxLength: 20, type: 'text' })} marginBottom={MARGINBOTTOM} size='lg' variant='outline' onChange={fun} value={recipeName} name='recipeName' placeholder='Enter Recipe Name' />
          <Button colorScheme={BUTTONCOLOR} size='lg' type='submit' value={"submit"} >SEARCH</Button>
        </FormControl>
      </form>
      {Object.keys(data).length > 0 && <BasicCard recipeDetails={data} />}

    </VStack>
  )
}