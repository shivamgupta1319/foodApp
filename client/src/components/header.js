import React from 'react';
import BasicCard from './card';
import { VStack } from '@chakra-ui/layout';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button, Heading, FormControl } from '@chakra-ui/react'

import { BUTTONCOLOR, HEADERCOLOR, MARGINBOTTOM } from '../constant/constant.header';
import { recipeData } from '../api/api.header';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import { schema } from '../schema/header.yupresolver';

export default function Header() {
  const { register, handleSubmit } = useForm({resolver: yupResolver(schema),});

  const {data: resData, mutate} = useMutation(recipeName => {
    return recipeData(recipeName)
  })

  const submitForm = (data) => {
     mutate(data.recipeName) 
  }
  const onError = (errors, e) => {
    alert(errors.recipeName.message)
  }

  const changeText =(e)=>{
    if(e.target.value.length===20){ 
      window.alert("recipe name shouldn't exceed 20 characters")
    }
  }
  return (
    <VStack pl={10} pr={10} pt={20}>
      <form onSubmit={handleSubmit(submitForm, onError)}>
        <FormControl align="center" isRequired marginBlock="10%" >
          <Heading marginBottom={MARGINBOTTOM} fontSize={70} fontWeight='bold' color={HEADERCOLOR} align='center'>Food Recipe</Heading>

          <Input {...register("recipeName")} onChange={changeText} marginBottom={MARGINBOTTOM} bg='white' size='lg' variant='outline' name='recipeName' placeholder='Enter Recipe Name' required />
          
          <Button colorScheme={BUTTONCOLOR} size='lg' type='submit' >SEARCH</Button>
          
        </FormControl>
        </form>
      {resData && Object.keys(resData).length > 0 && <BasicCard recipeDetails={resData} />}

    </VStack>
  )
}