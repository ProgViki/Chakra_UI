import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Link, 
  SimpleGrid, 
  useColorModeValue 
} from '@chakra-ui/react';

const Docs = () => {
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={8}>Documentation</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {[
          {
            title: "Getting Started",
            description: "Learn how to install and set up Chakra UI in your project",
            link: "/docs/getting-started"
          },
          {
            title: "Style Props",
            description: "Learn how to style components using style props",
            link: "/docs/style-props"
          },
          {
            title: "Theming",
            description: "Customize the default theme to match your design system",
            link: "/docs/theming"
          },
          {
            title: "Dark Mode",
            description: "Learn how to implement dark mode in your application",
            link: "/docs/dark-mode"
          },
          {
            title: "Accessibility",
            description: "Learn about the accessibility features in Chakra UI",
            link: "/docs/accessibility"
          },
          {
            title: "Responsive Styles",
            description: "Learn how to make your UI responsive",
            link: "/docs/responsive-styles"
          }
        ].map((item, index) => (
          <Link 
            key={index} 
            href={item.link} 
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="md"
              bg={cardBg}
              _hover={{ bg: cardHoverBg, transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              height="100%"
            >
              <Heading as="h3" size="md" mb={2}>{item.title}</Heading>
              <Text>{item.description}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Docs;