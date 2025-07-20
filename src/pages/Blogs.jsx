import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Stack, 
  Avatar, 
  useColorModeValue,
  Link,
  Flex,
  Tag
} from '@chakra-ui/react';

const Blog = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const posts = [
    {
      title: "Introducing Chakra UI Pro",
      excerpt: "We're excited to announce Chakra UI Pro, a collection of premium components and templates for your projects.",
      author: "Segun Adebayo",
      date: "May 15, 2023",
      readTime: "5 min read",
      tags: ["Announcement", "Pro"]
    },
    {
      title: "New Features in v2.0",
      excerpt: "Chakra UI v2.0 comes with many new features including improved theming, new components, and better performance.",
      author: "Tim Kolberger",
      date: "March 22, 2023",
      readTime: "8 min read",
      tags: ["Release", "Features"]
    },
    {
      title: "Building Accessible Forms",
      excerpt: "Learn how to build accessible forms with Chakra UI that work for all users.",
      author: "Jonathan Bakebwa",
      date: "February 10, 2023",
      readTime: "6 min read",
      tags: ["Guide", "Accessibility"]
    },
    {
      title: "Dark Mode Implementation",
      excerpt: "A comprehensive guide to implementing dark mode in your Chakra UI applications.",
      author: "Segun Adebayo",
      date: "January 5, 2023",
      readTime: "10 min read",
      tags: ["Tutorial", "Dark Mode"]
    },
    {
      title: "Performance Optimizations",
      excerpt: "Tips and tricks to optimize the performance of your Chakra UI applications.",
      author: "Tim Kolberger",
      date: "December 12, 2022",
      readTime: "7 min read",
      tags: ["Performance", "Optimization"]
    },
    {
      title: "Migrating from v1 to v2",
      excerpt: "Step-by-step guide to migrating your project from Chakra UI v1 to v2.",
      author: "Jonathan Bakebwa",
      date: "November 8, 2022",
      readTime: "12 min read",
      tags: ["Migration", "Guide"]
    }
  ];

  return (
    <Box maxW="6xl" mx="auto" py={12} px={4}>
      <Heading as="h1" size="2xl" mb={8}>Blog</Heading>
      <Text fontSize="xl" mb={8}>
        The latest news, tutorials, and announcements from the Chakra UI team.
      </Text>
      
      <Stack spacing={8}>
        {posts.map((post, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="md"
            bg={cardBg}
            borderColor={borderColor}
            _hover={{ shadow: 'md' }}
            transition="all 0.2s"
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Flex align="center">
                <Avatar name={post.author} size="sm" mr={2} />
                <Text fontWeight="medium">{post.author}</Text>
              </Flex>
              <Text fontSize="sm" color="gray.500">{post.date} · {post.readTime}</Text>
            </Flex>
            
            <Link href="#" _hover={{ textDecoration: 'none' }}>
              <Heading as="h3" size="lg" mb={2}>{post.title}</Heading>
              <Text mb={4}>{post.excerpt}</Text>
            </Link>
            
            <Flex>
              {post.tags.map((tag, i) => (
                <Tag key={i} mr={2} colorScheme="teal" size="sm">
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Blog;