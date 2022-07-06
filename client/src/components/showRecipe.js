import * as React from 'react';
import { Container, Box, Image} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import { BACKGROUNDCOLOR, TEXTCOLOR, TEXTFONT } from '../constant/constant.showRecipe';

export function RecipeCard(props) {
  const data = useLocation()
  console.log('data---------',data);
  const {aisle,consistency,name,instructions,url} = data.state;
  return (
    <VStack pt={10} bg={BACKGROUNDCOLOR} align = 'center'>
        <Image src={url}  /> 
        <Container maxW='md'  fontSize={26} color={TEXTCOLOR}>
          Recipe Name =   {name}
        </Container>
        <Container maxW='md'  fontSize={TEXTFONT} color={TEXTCOLOR}>
            Items  =   {aisle}
        </Container>
        <Container marginBottom={10} maxW='md' fontSize={TEXTFONT} color={TEXTCOLOR}>
          Consistency  =   {consistency}
        </Container>
        
        <Container maxW='2xl' fontSize={TEXTFONT} centerContent>
          instructions :-
          <Box padding='4'  color={TEXTCOLOR} maxW='md'>
          {instructions.replace(/(<([^>]+)>)/gi, "")}
          </Box>
        </Container>
      
    </VStack>
  );
}