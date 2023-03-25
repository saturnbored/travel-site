import React from 'react'
import { Card, CardBody, Text, Image, Stack, Heading, Button, Box } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai';


const IslandCard = ({url}) => {
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
        Kavaratti
      </Heading>
      <Text color={'gray'} fontSize={'14px'}>
        Kavaratti is the capital of the Union Territory
        of Lakshadweep having ...
      </Text>

        <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <AiFillStar />
                <Text fontWeight={'bold'}>4.5</Text>
                <Text color={'gray'}>(1.5k Review)</Text>
            </Box>
            <Box>
                <Button colorScheme={"telegram"} bg={'#3282AD'} fontSize={['12px', "14px"]}>Explore More</Button>
            </Box>
        </Box>
      
    </Stack>
  </CardBody>
</Card>
  )
}

export default IslandCard