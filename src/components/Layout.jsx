// src/components/Layout.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './chakra_web/Navbar';
import Footer from './chakra_web/Footer';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box as="main" pt={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;