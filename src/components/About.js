
import { Box, Card, CardMedia, Container, Paper, Typography } from '@mui/material';
import React from 'react';


function About() {



  return (
    <div style={{backgroundImage:"url(https://img.freepik.com/free-vector/green-leaf-shadow-frame-background_53876-116964.jpg?t=st=1717130901~exp=1717134501~hmac=e4f4faa8b6f92e07253ef10bb91de590ac08fea651ebcf5f98f321d159dc4364&w=900",width:"100%",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      
   
    <Container maxWidth="sm" className='doCenter'>
      <Typography variant="h2" gutterBottom sx={{textAlign:"center"}}>
        About Us
      </Typography>
      <Paper>
        <Typography variant="body1" gutterBottom sx={{
          padding:5
        }}>
        We're on a mission to make
building better e-commerce site with unrivalled speed and ease.
        </Typography>
      </Paper>

<Box>
<Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-vector/modern-flat-people-business-m-commerce-easy-use-highly-customizable_115990-371.jpg?w=900"
        title="green iguana"
      />
    </Card>
</Box>
      

    </Container>
    </div>
  );
}

export default About;