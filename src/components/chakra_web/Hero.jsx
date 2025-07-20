import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Image, 
  useColorModeValue 
} from '@chakra-ui/react';

const Hero = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} py={20} px={4}>
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="space-between" 
        maxW="6xl" 
        mx="auto"
      >
        <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
          <Heading as="h1" size="2xl" mb={6} lineHeight="shorter">
            Build accessible React apps <Box as="span" color="teal.500">with speed</Box>
          </Heading>
          <Text fontSize="xl" mb={8}>
            Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
          </Text>
          <Flex>
            <Button 
              as="a" 
              href="/docs/getting-started" 
              size="lg" 
              colorScheme="teal" 
              mr={4}
            >
              Get Started
            </Button>
            <Button 
              as="a" 
              href="/components" 
              size="lg" 
              variant="outline"
            >
              Components
            </Button>
          </Flex>
        </Box>
        <Box flex="1">
          <Image 
            src="https://chakra-ui.com/og-image.png" 
            alt="Chakra UI Hero Image" 
            borderRadius="md"
            shadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;