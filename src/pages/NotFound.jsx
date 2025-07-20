import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  useColorModeValue 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box 
      textAlign="center" 
      py={20} 
      px={6} 
      minH="60vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
      bg={bg}
    >
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
        mb={4}
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        as={RouterLink}
        to="/"
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;