import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function RecipeCard(props) {

    const {aisle,consistency,name,instructions} = props.recipeData;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div"   gutterBottom>
          Recipe Name =   {name}
        </Typography>
        <Typography variant="h6" component="div"   gutterBottom>
            Items  =   {aisle}
        </Typography>
        <Typography variant="h6" component="div"   gutterBottom>
          Consistency  =   {consistency}
        </Typography>
        <Typography variant="h6" component="div"   gutterBottom>
          instructions = {instructions}
        </Typography>
        
        
      </CardContent>
      
    </Card>
  );
}