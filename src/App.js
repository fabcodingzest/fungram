import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Link,
  Grid,
  Container,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import PostCard from './components/PostCard';
import api from './api/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get('/');
        setPosts(res.data.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <Flex alignItems={'center'} justifyContent={'center'} minH={'100vh'}>
        <Spinner size="xl" thickness="4px" />
      </Flex>
    );
  if (error) return (
    <Flex alignItems={'center'} justifyContent={'center'} minH={'100vh'}>
      {error}
    </Flex>
  );
  return (
    <div>
      <Box bg={'teal.600'}>
        <Container as={'header'} maxW={'container.xl'} py={6}>
          <Flex
            w={'full'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Text
              color={'white'}
              fontSize={'4xl'}
              fontWeight={'600'}
              textTransform={'uppercase'}
            >
              fungram
            </Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Container>
      </Box>

      <Container as="main" maxW="container.xl" my={10}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {posts.map(item => (
            <PostCard key={item.id} data={item} />
          ))}
        </Grid>
      </Container>
      <Box bg={'teal.600'}>
        <Container as={'footer'} maxW={'container.xl'} align={'center'} py={6}>
          <Text fontSize={'sm'}>
            &copy; 2021 Made by{' '}
            <Link fontWeight={'600'} href="http://github.com/fabcodingzest">
              Fab
            </Link>
          </Text>
          <Text fontSize={'sm'}>
            Checkout the code at{' '}
            <Link
              fontWeight={'600'}
              href="http://github.com/fabcodingzest"
            >
              GitHub
            </Link>
          </Text>
        </Container>
      </Box>
    </div>
  );
}

export default App;
