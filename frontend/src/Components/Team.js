import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

import oval from "../Images/oval.png";
import oval1 from "../Images/oval1.png";
import oval2 from "../Images/oval2.png";
import oval3 from "../Images/oval3.png";
import oval4 from "../Images/oval4.png";
import founder from "../Images/founder.png";
import SocialButton from "./Miscellaneous/SocialButton";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const images = [oval, oval1, oval2, oval3, oval4];

const Avatar = ({ id }) => {
  return (
    <Button>
      <Image src={images[id]}></Image>
    </Button>
  );
};

const Team = () => {
  return (
    <>
      <Box display="flex" flexDir={"column"} gap="10">
        <Box
          bgColor="#F3FCFF"
          py={"40px"}
          display="flex"
          flexDir={"column"}
          justifyContent="space-between"
          flexWrap={"wrap"}
          alignContent="center"
        >
          <Text fontWeight={"bold"} textColor="#3A3A3A" fontSize={"32px"}>
            Our Team
          </Text>
          <Text textColor={"#5A5A5A"} fontSize="16px" maxWidth={"400px"}>
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
            at nihil tantas platonem eos.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
          justifyContent="space-around"
          gap={{ lg: "10px", md: "20px", sm: "10px", base: "10px" }}
          px={{ sm: "20px", base: "20px" }}
        >
          <Box
            display="flex"
            flexDir={{
              lg: "column-reverse",
              md: "row-reverse",
              sm: "row-reverse",
              base: "row-reverse",
            }}
            justifyContent={{
              lg: "space-between",
              md: "center",
              sm: "center",
              base: "center",
            }}
            width={{ lg: "10%", md: "100%", sm: "100%", base: "100%" }}
            flexWrap={"wrap"}
            alignContent="flex-end"
            gap={{ lg: "15px", md: "15px", sm: "5px", base: "2px" }}
          >
            {images.map((i) => (
              <Button
                width={"fit-content"}
                borderRadius="100%"
                bg="transparent"
                _hover={{ bg: "transparent" }}
              >
                <Image
                  src={i}
                  height={{ lg: "50px", md: "50px", sm: "40px", base: "30px" }}
                />
              </Button>
            ))}
          </Box>
          <Box
            display="flex"
            flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
            width={{ lg: "90%" }}
            pr={{ lg: "40px" }}
          >
            <Box
              display="flex"
              justifyContent={"center"}
              width={{ lg: "30%", md: "100%", sm: "100%", base: "100%" }}
              // height = {{sm: "10%"}}
            >
              <Image
                src={founder}
                width={{ lg: "90%", md: "90%", sm: "60%", base: "100%" }}
              />
            </Box>
            <Box
              display={"flex"}
              flexDir="column"
              justifyContent={"space-between"}
              flexWrap="wrap"
              alignContent={{
                lg: "flex-start",
                md: "center",
                sm: "center",
                base: "center",
              }}
              width={{ lg: "70%", md: "100%", sm: "100%", base: "100%" }}
            >
              <Text
                width={{ lg: "100%", md: "90%", sm: "90%", base: "90%" }}
                textAlign={{
                  lg: "left",
                  md: "center",
                  sm: "center",
                  base: "center",
                }}
                fontSize="24px"
                fontWeight={"bold"}
                textColor="#3282AD"
              >
                Sebastian Bennett
              </Text>
              <Text
                width={{ lg: "100%", md: "90%", sm: "90%", base: "90%" }}
                textAlign={{
                  lg: "left",
                  md: "center",
                  sm: "center",
                  base: "center",
                }}
                textColor="#3A3A3A"
                fontWeight={"semibold"}
                fontSize="16px"
              >
                FOUNDER, LEAD PHOTOGRAPHER, CEO
              </Text>
              <Text
                width={{ lg: "100%", md: "90%", sm: "90%", base: "90%" }}
                textAlign={{
                  lg: "justify",
                  md: "justify",
                  sm: "justify",
                  base: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne
                his dolorum molestie reprehendunt, quo luptatum evertitur ex.
                Altera integre suavitate per an, alienum phaedrum te sea. Ex sea
                causae dolores, nam et doming dicunt feugait. Ea mel scripta
                aperiri postulant. Ut sed affert audire.
              </Text>
              <Stack
                direction={"row"}
                spacing={6}
                width={{ lg: "100%", md: "90%", sm: "90%", base: "90%" }}
                display="flex"
                justifyContent={{
                  sm: "center",
                  lg: "flex-start",
                  md: "flex-start",
                  base: "center",
                }}
              >
                <SocialButton label={"Facebook"} href={"#"}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Team;
