import React from 'react';
import { 
  Flex, 
  Text, 
  Image, 
  Link, 
  Button, 
  useColorMode,
  useColorModeValue 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
     import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Flex 
      as="nav" 
      align="center" 
      justify="space-between" 
      wrap="wrap" 
      padding="1.5rem" 
      bg={bg}
      color={color}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Flex align="center" mr={5}>
        <Image 
          src="https://chakra-ui.com/favicon.png" 
          alt="Chakra UI Logo" 
          boxSize="40px" 
          mr={2}
        />
        <Text fontSize="xl" fontWeight="bold">
          Chakra UI
        </Text>
      </Flex>

<Flex 
  display={{ base: "none", md: "flex" }} 
  width={{ base: "full", md: "auto" }} 
  alignItems="center"
>
  <RouterLink to="/docs">
    <Button variant="ghost" fontWeight="medium" _hover={{ color: 'teal.500' }}>
      Docs
    </Button>
  </RouterLink>
  <RouterLink to="/components">
    <Button variant="ghost" fontWeight="medium" _hover={{ color: 'teal.500' }}>
      Components
    </Button>
  </RouterLink>
  <RouterLink to="/examples">
    <Button variant="ghost" fontWeight="medium" _hover={{ color: 'teal.500' }}>
      Examples
    </Button>
  </RouterLink>
  <RouterLink to="/blog">
    <Button variant="ghost" fontWeight="medium" _hover={{ color: 'teal.500' }}>
      Blog
    </Button>
  </RouterLink>
</Flex>

      <Flex align="center">
        <Button 
          onClick={toggleColorMode} 
          mr={4}
          variant="ghost"
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button 
          as="a" 
          href="https://github.com/chakra-ui/chakra-ui" 
          target="_blank" 
          variant="outline" 
          mr={4}
        >
          GitHub
        </Button>
        <Button colorScheme="teal">
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;