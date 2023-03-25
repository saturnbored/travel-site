import React from 'react'
import { Card, CardBody, Text, Image, Stack, Heading, CardFooter, ButtonGroup, Button, Box } from '@chakra-ui/react'
import { BiLocationPlus } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BsCurrencyRupee } from 'react-icons/bs';


const PackageCard = ({url}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={url}
      alt='image'
      borderRadius='lg'
      w={'390px'}
      h={'352px'}
      position={'relative'}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'}>
          <BiLocationPlus />
          Indonesia
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <AiFillStar />
          4.5
        </Box>
      </Heading>
      <Text color={'gray'} fontSize={'14px'}>
          Explore the Beauty of the island for 3 days
          and 2 nights with our travel agency...
      </Text>
      <Text  
        display={'flex'} 
        alignItems={'center'} 
        border="1px solid white" 
        w={'50px'} 
        color={'black'}
        bg={'white'} 
        borderRadius={'10px'}
        position={'absolute'}
        top={5}
        right={10}
      >
        <BsCurrencyRupee />450
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2' display={'block'} m={'auto'} mt={-4}>
      <Button variant='solid' colorScheme='telegram' pt={'10px'} pl={'32px'} pb={'10px'} pr={'32px'}>
        Buy now
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default PackageCard