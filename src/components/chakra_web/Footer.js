import React from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Link, 
  Stack, 
  Icon, 
  useColorModeValue 
} from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} color={color} py={10} px={4}>
      <Box maxW="6xl" mx="auto">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center"
          mb={8}
        >
          <Flex align="center" mb={{ base: 4, md: 0 }}>
            <Text fontSize="xl" fontWeight="bold" mr={2}>
              Chakra UI
            </Text>
            <Text fontSize="sm" color="gray.500">
              © {new Date().getFullYear()} Chakra UI
            </Text>
          </Flex>

          <Stack direction="row" spacing={6}>
            <Link href="#" fontSize="sm" _hover={{ color: 'teal.500' }}>
              Docs
            </Link>
            <Link href="#" fontSize="sm" _hover={{ color: 'teal.500' }}>
              Components
            </Link>
            <Link href="#" fontSize="sm" _hover={{ color: 'teal.500' }}>
              Blog
            </Link>
            <Link href="#" fontSize="sm" _hover={{ color: 'teal.500' }}>
              GitHub
            </Link>
          </Stack>
        </Flex>

        <Flex justify="center" mt={8}>
          <Link href="https://twitter.com/chakraui" isExternal mx={2}>
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
          <Link href="https://github.com/chakra-ui/chakra-ui" isExternal mx={2}>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link href="https://discord.gg/chakra-ui" isExternal mx={2}>
            <Icon as={FaDiscord} boxSize={5} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;