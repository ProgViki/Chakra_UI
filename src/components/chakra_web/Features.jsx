import React from 'react';
import { 
  Box, 
  SimpleGrid, 
  Heading, 
  Text, 
  Icon, 
  Flex,
  useColorModeValue 
} from '@chakra-ui/react';
import { FaAccessibleIcon, FaBolt, FaCode, FaPalette } from 'react-icons/fa';

const Feature = ({ title, icon, children }) => {
  const iconColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Flex align="center" mb={4}>
        <Icon as={icon} color={iconColor} mr={3} boxSize={6} />
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Text>{children}</Text>
    </Box>
  );
};

const Features = () => {
  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} py={20} px={4}>
      <Box maxW="6xl" mx="auto">
        <Heading as="h2" size="xl" mb={12} textAlign="center">
          Why Chakra UI?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature icon={FaBolt} title="Simple">
            Quickly build React applications with ease using our prebuilt components.
          </Feature>
          <Feature icon={FaCode} title="Modular">
            Just import the components you need and start building.
          </Feature>
          <Feature icon={FaAccessibleIcon} title="Accessible">
            Chakra UI components follow the WAI-ARIA guidelines.
          </Feature>
          <Feature icon={FaPalette} title="Themeable">
            Customize any part of our components to match your design needs.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Features;