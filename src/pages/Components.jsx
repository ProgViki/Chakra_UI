import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  Tag, 
  useColorModeValue 
} from '@chakra-ui/react';

const Components = () => {
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.600');

  const components = [
    { name: 'Button', category: 'Forms', status: 'stable' },
    { name: 'Input', category: 'Forms', status: 'stable' },
    { name: 'Checkbox', category: 'Forms', status: 'stable' },
    { name: 'Radio', category: 'Forms', status: 'stable' },
    { name: 'Select', category: 'Forms', status: 'stable' },
    { name: 'Switch', category: 'Forms', status: 'stable' },
    { name: 'Slider', category: 'Forms', status: 'stable' },
    { name: 'FormControl', category: 'Forms', status: 'stable' },
    { name: 'Avatar', category: 'Data Display', status: 'stable' },
    { name: 'Badge', category: 'Data Display', status: 'stable' },
    { name: 'Image', category: 'Data Display', status: 'stable' },
    { name: 'List', category: 'Data Display', status: 'stable' },
    { name: 'Table', category: 'Data Display', status: 'stable' },
    { name: 'Alert', category: 'Feedback', status: 'stable' },
    { name: 'Toast', category: 'Feedback', status: 'stable' },
    { name: 'Spinner', category: 'Feedback', status: 'stable' },
    { name: 'Skeleton', category: 'Feedback', status: 'stable' },
    { name: 'Drawer', category: 'Overlay', status: 'stable' },
    { name: 'Modal', category: 'Overlay', status: 'stable' },
    { name: 'Tooltip', category: 'Overlay', status: 'stable' },
    { name: 'Popover', category: 'Overlay', status: 'stable' },
    { name: 'Menu', category: 'Overlay', status: 'stable' },
  ];

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={8}>Components</Heading>
      <Text fontSize="xl" mb={8}>
        Chakra UI provides prebuilt components to help you build your projects faster.
        Here's an overview of all the components available.
      </Text>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {components.map((component, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="md"
            bg={cardBg}
            _hover={{ bg: cardHoverBg, transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Heading as="h3" size="md" mb={2}>{component.name}</Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>{component.category}</Text>
            <Tag 
              size="sm" 
              colorScheme={component.status === 'stable' ? 'green' : 'yellow'}
            >
              {component.status}
            </Tag>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Components;