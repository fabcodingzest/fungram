import {
  Image,
  Box,
  Tag,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

const PostCard = ({ data }) => {
  const {
    image,
    tags,
    text,
    publishDate,
    ownerFirstName,
    ownerLastName,
    ownerImage,
  } = data;
  const date = new Date(publishDate).toLocaleDateString();
  const tagsArr = tags.split(', ');
  return (
    <Center py={6}>
      <Box
        maxW={'350px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={useColorModeValue('2xl', 'sm')}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={image}
            objectFit={'cover'}
            h={'full'}
            w={'full'}
            alt={text}
          />
        </Box>
        <Stack>
          <HStack spacing={2}>
            {tagsArr.map(item => (
              <Tag size={'sm'} key={item} variant="solid" colorScheme="teal">
                {item}
              </Tag>
            ))}
          </HStack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'xl'}
            fontFamily={'body'}
            textTransform="capitalize"
            noOfLines={2}
          >
            {text}
          </Heading>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={ownerImage} alt={'Author'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>
              {ownerFirstName} {ownerLastName}
            </Text>
            <Text color={'gray.500'}>{date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PostCard;
