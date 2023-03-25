import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsFillUmbrellaFill, BsFillPersonFill } from "react-icons/bs";
import { BiBuildings, BiCalendar } from "react-icons/bi";
import { MdMail } from "react-icons/md";

import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <HStack width="fit-content" spacing={0}>
        <Button
          onClick={() => setValue(value + 1)}
          variant="outline"
          borderRadius="0"
          border="1px solid #A2A8AB"
        >
          +
        </Button>
        <Box
          borderRadius="0"
          border="1px solid #A2A8AB"
          minWidth={"50px"}
          minH="40px"
          display="flex"
          flexWrap={"wrap"}
          alignContent="center"
          justifyContent={"center"}
        >
          <Text>{value}</Text>
        </Box>
        <Button
          onClick={() => setValue(value - 1)}
          variant="outline"
          borderRadius="0"
          border="1px solid #A2A8AB"
        >
          -
        </Button>
      </HStack>
    </>
  );
};

const TravelForm = () => {
  return (
    <>
      <Card maxWidth={"fit-content"} shadow = "2xl">
        <CardBody maxWidth={"fit-content"}>
          <Box
            display="flex"
            flexDir={"column"}
            flexWrap="wrap"
            justifyContent={"center"}
            alignContent="center"
            gap="2vw"
          >
            <Box
              display="flex"
              justifyContent={"center"}
              flexWrap="wrap"
              alignContent={"center"}
              gap="1vw"
            >
              <Text pt={"7px"} fontSize={"16px"} fontWeight="semibold">
                Starting From
              </Text>
              <Text textColor={"#3282AD"} fontWeight="bold" fontSize={"24px"}>
                ₹50,999
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"column"}
              justifyContent="center"
              flexWrap={"wrap"}
              alignContent={"center"}
              gap="2vw"
            >
              <Box
                display={"flex"}
                flexDir="column"
                justifyContent="center"
                flexWrap={"wrap"}
                alignContent="center"
              >
                <Text fontWeight={"semibold"} fontSize="16px">
                  Want To Go On A Memorable Holiday?
                </Text>
                <Text
                  textColor={"#3A3A3A"}
                  maxWidth="270px"
                  fontSize="12px"
                  textAlign={"center"}
                >
                  Provide Your Details To Know Best Holiday Details
                </Text>
              </Box>
              <Stack direction="column" maxWidth={"fit-content"}>
                <FormControl>
                  <FormLabel>Package Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsFillUmbrellaFill color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>City Of Departure</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiBuildings color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Date Of Departure</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiCalendar color="gray.800" />}
                    />
                    <Input type="date" placeholder="Date of Departure" />
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiCalendar color="gray.800" />}
                    />
                  </InputGroup>
                </FormControl>
                <Stack direction="row">
                  <FormControl>
                    <FormLabel>Adult</FormLabel>
                    <Counter />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Children</FormLabel>
                    <Counter />
                  </FormControl>
                </Stack>
                <Flex align="center">
                  <Text
                    padding="2"
                    minWidth={"fit-content"}
                    textColor="#3A3A3A"
                    fontSize={"16px"}
                  >
                    Contact Details
                  </Text>
                  <Divider borderColor={"#A2A8AB"} />
                </Flex>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsFillPersonFill color="gray.800" />}
                    />
                    <Input size={"md"} placeholder="Your Name"></Input>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdMail color="gray.800" />}
                    />
                    <Input
                      type="email"
                      size={"md"}
                      placeholder="Your Email"
                    ></Input>
                  </InputGroup>
                </FormControl>
                <HStack>
                  <Input value="+91" maxW={"100px"} />
                  <Input placeholder="Your mobile number" size="md" />
                </HStack>
                <Button colorScheme={"telegram"} variant="outline">
                  {" "}
                  Send Query
                </Button>
                <Flex align="center">
                  <Divider borderColor={"#A2A8AB"} />
                  <Text padding="2">OR</Text>
                  <Divider borderColor={"#A2A8AB"} />
                </Flex>
                <Button colorScheme={"telegram"}>Submit</Button>
              </Stack>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default TravelForm;
