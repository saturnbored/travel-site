import { Box, Grid, GridItem, Hide, Image, Text } from "@chakra-ui/react";

import video from "../Images/video.png";

const Certificate = () => {
  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        justifyContent={"center"}
        flexWrap="wrap"
        alignContent={"center"}
        gap = "10vh"
        px = "1vw"
      >
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          flexWrap={"wrap"}
          alignContent="center"
        >
          <Text fontWeight={"bold"} fontSize="32px" textColor="#3A3A3A">
            Certificate
          </Text>
          <Text textColor={"#5A5A5A"} fontSize="16px" maxWidth="600px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            turpis sodales, facilisis massa at, rutrum eros.
          </Text>
        </Box>
        <Grid
          templateColumns={{
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          gap="10px"
          p="20px"
        >
          <GridItem
            display="flex"
            justifyContent={{
              lg: "flex-end",
              md: "flex-end",
              sm: "center",
              base: "center",
            }}
          >
            <Image src={video} />
          </GridItem>
          <GridItem
            display="flex"
            justifyContent={{
              lg: "flex-start",
              md: "flex-start",
              sm: "center",
              base: "center",
            }}
          >
            <Image src={video} />
          </GridItem>
          <GridItem
            display="flex"
            justifyContent={{
              lg: "flex-end",
              md: "flex-end",
              sm: "center",
              base: "center",
            }}
          >
            <Image src={video} />
          </GridItem>
          <Hide below="md">
            <GridItem
              display="flex"
              justifyContent={{
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                base: "center",
              }}
            >
              <Image src={video} />
            </GridItem>
          </Hide>
        </Grid>
      </Box>
    </>
  );
};


export default Certificate;
