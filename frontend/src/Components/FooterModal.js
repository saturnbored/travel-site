import { Box, Button, Image, Text } from "@chakra-ui/react";
import MobileStoreButton from "react-mobile-store-button";
import "../App.css";
import mobileImage from '../Images/mobile.png';

const FooterModal = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent = {'space-between'}
        bg = 'black'
        maxW={"80vw"}
        minW = {"90vw"}
        maxH = {"40vh"}
        borderRadius = "5px"
        alignItems={"top"}
        p = {10}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"left"}
          justifyContent="center"
          gap = {'20px'}
        >
          <Text fontSize={"42px"} color= "white">Download Our App</Text>
          <Text align={'left'} color= "white"> The best travel in the world </Text>
            <MobileStoreButton
              store="android"
              url = {'#'}
              linkProps={{ title: "Google App" , width: 'fit-content'}}
            />
        </Box>
        <Box maxH={"40vh"}>
            <Image maxH = {"30vh"} src = {mobileImage}/>
        </Box>
      </Box>
    </>
  );
};

export default FooterModal;
