import React from 'react'
import { Card, CardBody, Text, Image, Stack, Heading, Flex } from '@chakra-ui/react'
import img from "../../Images/star.png"

let loop = [1,2,3,4,5];

const TestimonialCard = (props) => {
  return (
    <Card maxW='sm'
    shadow = "2xl">
  <CardBody textAlign={'center'} p={'30px'}>
    <Image
      src={props.url}
      alt={props.name}
      borderRadius='50%'
      w={'131px'}
      h={'131px'}
      m='auto'
    />
    <Stack mt='4' spacing='3'>
      <Heading size='md'>
      {props.name}        
      </Heading>
      <Heading mb={10} size='md' fontSize={'18px'} fontWeight={'semibold'} color={'#555555'}>
        Toronto, Canada        
      </Heading>
    </Stack>
  </CardBody>
  <Text color={'gray'} fontSize={'14px'} textAlign={'center'}>
            Lorem ipsum dolor sit amet,<br /> 
            consectetur adipiscing elit. <br />
            Pellentesque efficitur ac quam<br /> 
            in congue. 
        </Text>
      <Flex gap={1} pl={['30px','20px']} mt={5} mb={5} justifyContent = "center">
        {
            loop.map((el, index)=><Image key={index} w={'29px'} h={'29px'} src={img} alt='start'/>)
        }
    </Flex>
</Card>
  )
}

export default TestimonialCard;