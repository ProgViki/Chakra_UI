import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  useColorModeValue,
  Badge
} from '@chakra-ui/react';

const Examples = () => {
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.600');

  const examples = [
    {
      title: "Authentication",
      description: "Login and signup forms with validation",
      image: "https://via.placeholder.com/300x180?text=Authentication",
      tags: ["Forms", "Validation"]
    },
    {
      title: "Dashboard",
      description: "Admin dashboard with charts and tables",
      image: "https://via.placeholder.com/300x180?text=Dashboard",
      tags: ["Layout", "Charts", "Tables"]
    },
    {
      title: "E-commerce",
      description: "Product listing with filters and cart",
      image: "https://via.placeholder.com/300x180?text=E-commerce",
      tags: ["Commerce", "Filters"]
    },
    {
      title: "Blog",
      description: "Blog layout with featured posts",
      image: "https://via.placeholder.com/300x180?text=Blog",
      tags: ["Content", "Cards"]
    },
    {
      title: "Profile",
      description: "User profile with editable sections",
      image: "https://via.placeholder.com/300x180?text=Profile",
      tags: ["Forms", "Avatar"]
    },
    {
      title: "Settings",
      description: "Account settings with multiple sections",
      image: "https://via.placeholder.com/300x180?text=Settings",
      tags: ["Forms", "Tabs"]
    }
  ];

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={8}>Examples</Heading>
      <Text fontSize="xl" mb={8}>
        Get inspired by these example applications built with Chakra UI.
      </Text>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {examples.map((example, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            bg={cardBg}
            _hover={{ bg: cardHoverBg, transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Image src={example.image} alt={example.title} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>{example.title}</Heading>
              <Text mb={4}>{example.description}</Text>
              <Box>
                {example.tags.map((tag, i) => (
                  <Badge key={i} mr={2} colorScheme="teal">
                    {tag}
                  </Badge>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Examples;