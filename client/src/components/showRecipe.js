import * as React from 'react';
import { Container, Box } from '@chakra-ui/react'
import {VStack} from '@chakra-ui/layout';

export default function RecipeCard(props) {

  const {aisle,consistency,name,instructions} = props.recipeData;
  console.log(instructions);
  return (
    <VStack >
      
        <Container maxW='md' bg='blue.600' color='white'>
          Recipe Name =   {name}
        </Container>
        <Container maxW='md' bg='blue.600' color='white'>
            Items  =   {aisle}
        </Container>
        <Container maxW='md' bg='blue.600' color='white'>
          Consistency  =   {consistency}
        </Container>
        <Container maxW='2xl' bg='blue.600' centerContent>
          <Box padding='4' bg='blue.400' color='black' maxW='md'>
          instructions =<br></br> {instructions}
          </Box>
        </Container>
      
    </VStack>
  );
}