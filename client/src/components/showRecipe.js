import * as React from 'react';
import { Container, Box, Image} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';

export function RecipeCard(props) {
  const data = useLocation()
  console.log('data',data);
  const {aisle,consistency,name,instructions,url} = data.state;
  return (
    <VStack paddingTop={10} backgroundColor='#4FD1C5' >
        <Image src={url}  /> 
        <Container maxW='md' align = 'center' fontSize={26} color='black'>
          Recipe Name =   {name}
        </Container>
        <Container maxW='md' align = 'center' fontSize={22} color='black'>
            Items  =   {aisle}
        </Container>
        <Container maxW='md' align = 'center' fontSize={22} color='black'>
          Consistency  =   {consistency}
        </Container>
        <br></br><br></br>
        <Container maxW='2xl' fontSize={22} centerContent>
          instructions :-
          <Box padding='4'  color='black' maxW='md'>
          <br></br> {instructions}
          </Box>
        </Container>
      
    </VStack>
  );
}