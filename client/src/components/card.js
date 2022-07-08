import { Box, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from "react-router-dom";

import { RECIPEDETAILS } from '../constant/constant.card';


export default function BasicCard(props) {
  const { results } = props.recipeDetails;
  const navigate = useNavigate()
  

  const changePage =async (id) => {
      // const data = await recipeDetail(id);
      navigate(RECIPEDETAILS,{
        state:id,
      })

  }
  

  return (
    <VStack>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {
          results.map((result) => (
            <VStack margin={10}>
            
              <Image
              src={result.image}
              alt={result.title}
              onClick={() => { changePage(result.id) }} />
              <Heading align = 'center' fontSize='18' >{result.title}</Heading>
              
            </VStack>
            
             
            
          ))
          
      }
      </Box>
  
    </VStack>
  );
}