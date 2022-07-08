import React from 'react';
import BasicCard from './card';
import { VStack } from '@chakra-ui/layout';
import { Input, Button, Heading, FormControl, FormErrorMessage } from '@chakra-ui/react'

import { BUTTONCOLOR, HEADERCOLOR, MARGINBOTTOM } from '../constant/constant.header';
import { recipeData } from '../api/api.header';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';

export default function Header() {
  const { register,formState, handleSubmit } = useForm();


  // const fun = (event) => {
  //   setRecipeName(event.target.value);
  // }



  const {data: resData, mutate} = useMutation(recipeName => {
    return recipeData(recipeName)
  })

  const submitForm = (data) => {
     mutate(data.recipeName) 
  }


  return (
    <VStack pl={10} pr={10} pt={20}>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl align="center" isRequired marginBlock="10%" isInvalid={!!formState.errors.recipeName}>
          <Heading marginBottom={MARGINBOTTOM} fontSize={70} fontWeight='bold' color={HEADERCOLOR} align='center'>Food Recipe</Heading>

          <Input {...register("recipeName", { required: true, maxLength: 20, type: 'text' })} marginBottom={MARGINBOTTOM} size='lg' variant='outline' name='recipeName' placeholder='Enter Recipe Name' />
          <Button colorScheme={BUTTONCOLOR} size='lg' type='submit' value={"submit"} >SEARCH</Button>
          <FormErrorMessage>h</FormErrorMessage>
        </FormControl>
        </form>
      {resData && Object.keys(resData).length > 0 && <BasicCard recipeDetails={resData} />}

    </VStack>
  )
}