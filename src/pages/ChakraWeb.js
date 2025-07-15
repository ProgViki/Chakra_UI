// src/App.js
import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

function ChakraWeb() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" minH="100vh">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default ChakraWeb;