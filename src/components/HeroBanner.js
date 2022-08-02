import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../App.css'

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className='Hero-Container'>
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Get Yolked</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Lift Hard, Look Good <br />
      Simple.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out our exercises, we'll get you yolked brah. 
    </Typography>
    <Stack>
      <a href="#exercises" 
      style={{ marginTop: '45px', 
      textDecoration: 'none', 
      width: '200px', 
      textAlign: 'center', 
      background: '#FF2625',
      padding: '14px', 
      fontSize: '22px',
      textTransform: 'none',
      color: 'white',
      borderRadius: '4px' }}>
        See exercises
      </a>
    </Stack>
  </Box>
  <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
  
);

export default HeroBanner;