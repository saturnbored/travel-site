import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import { useState } from "react";

import exp1 from "../Images/exp1.png";
import exp2 from "../Images/exp2.png";
import exp3 from "../Images/exp3.png";
import exp4 from "../Images/exp4.png";
import oval from "../Images/oval.png";

const Reviews = () => {
  const [images, setImages] = useState([exp4, exp3, exp2, exp1]);

  return (
    <>
      <Box mt={"100px"}>
        <Box display="flex" flexDir={"column"}>
          <Box
            display={"flex"}
            flexDirection="column"
            flexWrap={"wrap"}
            alignContent="center"
          >
            <Text>What Customers are saying?</Text>
            <Text maxWidth={"600px"}>
              Take a look at what our customers are saying. At Nature we not
              only provide you with services but also we provide you with
              valuable experiences for your valuable time.
            </Text>
          </Box>
          <Box display="flex" flexDir={"row"} justifyContent="center"
          pr = {{base: "20px"}}
          >
            <Card pt="9%">
              <CardBody maxWidth={"fit-content"} mr={"-40px"}>
                <Image src={images[0]} />
              </CardBody>
            </Card>
            <Card pt="9%">
              <CardBody>
                <Image src={images[1]} />
              </CardBody>
            </Card>
            <Hide below="500px">
              <Card pt="7%">
                <CardBody>
                  <Image src={images[2]} />
                </CardBody>
              </Card>
            </Hide>
            <Hide below="900px">
              <Card pt="5%">
                <CardBody>
                  <Image src={images[3]} />
                </CardBody>
              </Card>
            </Hide>
          </Box>
          <Box
            display="flex"
            justifyContent={"flex-end"}
            mt={{ lg: "-105px", md: "-105px", sm: "-50px" }}
            pr={{ lg: "100px", md: "100px", sm: "5px", base: "5px" }}
            mb="200px"
            mr = {{base: "25px"}}
          >
            <Card
              width={{
                lg: "fit-content",
                md: "fit-content",
                sm: "80%",
                base: "80%",
              }}
              p = {{sm: "10px", base: "10px"}}
              shadow={"dark-lg"}
            >
              <CardBody
              p = {{base: "5px"}}
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  gap="15px"
                  maxH={{base: "fit-content"}}
                  flexWrap={"wrap"}
                  alignContent="center"
                  p = {{base: "0px"}}
                >
                  <Image src={oval}  h = {{base: "100px"}} />
                  <Text pt="20px" display="flex" flexWrap="wrap">
                    "Great place to spend your vacation while exploring
                    different experiences."
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Reviews;
