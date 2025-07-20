// src/App.js
import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Navbar from '../components/chakra_web/Navbar';
// import Hero from '../components/chakra_web/Hero';
// import Features from '../components/chakra_web/Features';
import Footer from '../components/chakra_web/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Docs from './Docs';
import Examples from './Examples';
import Blog from './Blogs';
import NotFound from './NotFound';
import Components from './Components';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

function ChakraWeb() {
  return (
   <ChakraProvider theme={theme}>
      <Router>
        <Layout>
        <Box bg="white" minH="100vh">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/components" element={<Components />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Box>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default ChakraWeb;