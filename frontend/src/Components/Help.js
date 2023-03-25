import { Box, Divider, Text } from "@chakra-ui/react";

import { MdPermPhoneMsg } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Help = () => {
  return (
    <>
      <Box
      display = "flex"
      flexDir={"column"}
      justifyContent = "center"
      flexWrap={"wrap"}
      alignContent = "center"
      maxWidth={{lg: "30vw", md: "30vw", sm: "100%", base: "100%"}}
      gap = "1vw"
      >
        <Text maxWidth={"100%"}
        fontSize = "20px"
        fontWeight={"semibold"}
        >Need Help?</Text>
        <Divider borderColor = "black" width = "50%"/>
        <Box
          display="flex"
          justifyContent={"flex-start"}
          gap="1.5vw"
          flexWrap={"wrap"}
          alignContent="center"
          py="1vw"
          maxWidth={"100%"}
        >
          <MdPermPhoneMsg color="blue.400" />
          <Text mt = "-3px" >91-8474846846</Text>
        </Box>
        <Box
          display="flex"
          justifyContent={"center"}
          gap="1.5vw"
          flexWrap={"wrap"}
          alignContent="center"
          py="1vw"
          maxWidth={"100%"}
        >
          <IoMdMail color="blue.400" />
          <Text mt = "-3px" >sara.cruz@example.com</Text>
        </Box>
      </Box>
    </>
  );
};

export default Help;
