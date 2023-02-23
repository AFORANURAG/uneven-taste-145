import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import starrating from "../../assets/images/icons8-star-rating-64.png"
// import { Verified } from '@mui/icons-material';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
  </Box>
);


export default function BasicCard({name,description,verified}) {
  return (
    <Card sx={{ marginTop:"50px",width:"80%" }}>
      <CardContent>
        <Typography sx={{ fontSize:24}} color="text.secondary" gutterBottom>
        {name}
        </Typography>
        <img  src={starrating} alt=""/>
        <Typography sx={{ mb: 2.5 }} color="text.secondary">
        {description}
        </Typography>
        <Typography sx={{ fontSize:18}} variant="body2">
         {verified}
          <br />
        </Typography>
      </CardContent>
      
      <CardActions>


      </CardActions>
    
      </Card>
  );
}

// <Typography variant="h5" component="div">
// be{bull}nev{bull}o{bull}lent
// </Typography>