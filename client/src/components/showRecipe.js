import React from 'react';
import { Container, Box, Image, Spinner} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';
import { BACKGROUNDCOLOR, TEXTCOLOR, TEXTFONT } from '../constant/constant.showRecipe';
import { recipeDetail } from '../api/api.card';
import { useQuery } from 'react-query';

export function RecipeCard(props) {
  const item = useLocation()
  const id = item.state
  console.log(item,typeof (id));
  const { isLoading, error, data } = useQuery('id', async () => {
     return await recipeDetail(id)
  }
    
  );
 
  if (isLoading) return <Spinner
                          align="center"
                          justifyContent='center'
                          thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='blue.500'
                          size='xl'
                        />

  if (error) return 'An error has occurred: ' + error

  return (
    <VStack pt={10} bg={BACKGROUNDCOLOR} align = 'center'>
        <Image src={data.url}  /> 
        <Container maxW='md'  fontSize={26} color={TEXTCOLOR}>
          Recipe Name =   {data.name}
        </Container>
        <Container maxW='md'  fontSize={TEXTFONT} color={TEXTCOLOR}>
            Items  =   {data.aisle}
        </Container>
        <Container marginBottom={10} maxW='md' fontSize={TEXTFONT} color={TEXTCOLOR}>
          Consistency  =   {data.consistency}
        </Container>
        
        <Container maxW='2xl' fontSize={TEXTFONT} centerContent>
          instructions :-
          <Box padding='4'  color={TEXTCOLOR} maxW='md'>
          {data.instructions.replace(/(<([^>]+)>)/gi, "")}
          </Box>
        </Container>
      
    </VStack>
  );
}