import React from "react";
import {
  Box,
  Button,
  Hide,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import TestimonialCard from './Cards/TestimonialCard';

const dataforDesktop = [
  {
    url: "https://s3-alpha-sig.figma.com/img/b1bb/e8ce/206521360041121ab6752229108adf37?Expires=1679875200&Signature=mhdlSDtSTREDBTTzzSSx-hX7tA9BxnrR3FT6kuMMoGyonPlHCEXbpvgeZ3ZxyhQPQ-gtYHMI1NEJ-XGoXYzNjw9iW1cQZM~Aom~yeZ3DSEt9HIScCEhmO4RybpM1CK7FFYkqnSiOqS6nLh-4QyteKDgs92ouMg4Xi7CiEjiQm71mKaJt95OHHFT3UcfxbAUipcogdqhuWsmLX5uF9u-hCIocC9Oaq36Qs~wFgdaI6jTlOUmZ1s4pbmTkTOJbV~Ij217gU516QhFmYIvkJhpLcXEWk3uU5k3DyIH412370MxgB5pE9x~qRgTh-rotyR9EWfnvh-HxkbOJ72DjIBdNdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Roman Rey",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/329b/d1ca/a6525a07e0f84aaaf871d1a8947ae6cd?Expires=1679875200&Signature=Ms505fVgd993Mab9Dww3vKiz6FNEHyjDH0UdO7TLBs8TK91rISiopE0oZNDZZufnNaNSWN-AoIoDKURcwujalQNNDYlkC~Czufvs7nLxnthlH1oKZdCC6Cx91YmDIx91GF7HlsBzzZHVH3NARReRnp6d8T-uDca0CGc-n0oEmapGbhJUzT-msNNGKz9QY4wlH35yG0U2HqASs6fSNlTtTfxnLziEQovhVk883PaLl39rWaIoggniJrNAMXcEauPn5bctSfOb7UIoILlkxyx7ErnNoVh2~P-4o9hmJKEKnDCB~9VLZ2FJigEGQAZf8XBOt~jrHAOaQgnw0Ktn2Me98w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Alex Tom",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/57bb/d024/40156c2a93848029f90c1d272f769166?Expires=1679875200&Signature=UuID2pvzf~6BWWJ0hENJztzrqqvqYbzJdzlS-b2MkWl6AUm~Z7cvhh8-8qO9yXXxe3MRZO7UB-zzfrq-XAB1RC5AavE13RmCYMYi-aF2V5RvhNrsgl2~nsKKfU36Rdag-geS3Io3o96GjJcOzGQzVAv0CkSpGGf~m5dST~0w9V21OPsA-BmR~IqZ2dOW-dYw-z02DBhT0B3TVqgUT8At0Vn-RkaYTpW5-CcX0SFOn60KCvAHnJ98PMD0qe2~uEXBITl15nctlcx5m4GhARI2UdaULvSwfVTssdlVWtZ0H4GZ4uaLNzqplU7Qc9hqojE-4Hpnm3U367ocWYBv~dPDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Finn Balor",
  },
];

const dataBelowDesktop = [
  {
    url: "https://s3-alpha-sig.figma.com/img/b1bb/e8ce/206521360041121ab6752229108adf37?Expires=1679875200&Signature=mhdlSDtSTREDBTTzzSSx-hX7tA9BxnrR3FT6kuMMoGyonPlHCEXbpvgeZ3ZxyhQPQ-gtYHMI1NEJ-XGoXYzNjw9iW1cQZM~Aom~yeZ3DSEt9HIScCEhmO4RybpM1CK7FFYkqnSiOqS6nLh-4QyteKDgs92ouMg4Xi7CiEjiQm71mKaJt95OHHFT3UcfxbAUipcogdqhuWsmLX5uF9u-hCIocC9Oaq36Qs~wFgdaI6jTlOUmZ1s4pbmTkTOJbV~Ij217gU516QhFmYIvkJhpLcXEWk3uU5k3DyIH412370MxgB5pE9x~qRgTh-rotyR9EWfnvh-HxkbOJ72DjIBdNdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Roman Rey",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/329b/d1ca/a6525a07e0f84aaaf871d1a8947ae6cd?Expires=1679875200&Signature=Ms505fVgd993Mab9Dww3vKiz6FNEHyjDH0UdO7TLBs8TK91rISiopE0oZNDZZufnNaNSWN-AoIoDKURcwujalQNNDYlkC~Czufvs7nLxnthlH1oKZdCC6Cx91YmDIx91GF7HlsBzzZHVH3NARReRnp6d8T-uDca0CGc-n0oEmapGbhJUzT-msNNGKz9QY4wlH35yG0U2HqASs6fSNlTtTfxnLziEQovhVk883PaLl39rWaIoggniJrNAMXcEauPn5bctSfOb7UIoILlkxyx7ErnNoVh2~P-4o9hmJKEKnDCB~9VLZ2FJigEGQAZf8XBOt~jrHAOaQgnw0Ktn2Me98w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Alex Tom",
  },
];

const Testimonials = () => {
  return (
    <Box
      mt={"200px"}
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
      mb={"200px"}
    >
      <Hide below="500px">
        <Box
          position={"relative"}
          w={"100%"}
          
          bg={"#42A7C3"}
          display={"flex"}
          gap={{lg: "10vw"}}
          justifyContent = "center"
        >
          <Box w={{lg: "100%"}} p={"20px"} display = "flex" flexDir={"column"} justifyContent={"space-between"}>
            <Text
              textAlign={"left"}
              fontSize={["16px", "20px", "24px", "32px"]}
              fontWeight={"bold"}
              color={"white"}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Text textAlign={"left"} fontSize={"14px"} color={"white"} mt={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue.
            </Text>
          </Box>
          <Box maxWidth={"50%"}>
            <Image
              w={"100%"}
              h={"100%"}
              src="https://s3-alpha-sig.figma.com/img/d4f4/9952/37c462a1c541b7a812220d9a0ad0c7ce?Expires=1679875200&Signature=XQgdDg20KSFHjEetzwZYdILmITubkuNf96VTvQZwUonMNcbP6yySLBapZakm70CxJdeO8fpd-WirZwssIKXfiaabAwkZnvYithHyWWXz84~L-fMRo7dcdgSDI8wVVm~O~SWdU3cxqyKCLXK2F~SuyXWQNtz6y2~-j80RPtzY1vNJipGE49mElsgeNKNTnnG4vcrH5YwhdpNc3~~mJC-KSAIM0dmGUWnqUakAAobO1vBAByjllxSaM3lXwEfEmFb5wM6cWWP5~ZIWgmn9O9U3vLGcP1qERB3YAT-JIUxjaA4x9fvuk56PZZpuh3t0quVJhgEU7GSZov7k3oEcdG9VcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="wolrd-map"
            />
            <Button position = {"absolute"} bottom={"100px"} right={20}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Hide>

      <Show below="500px">
        <Box position={"relative"} w={"100%"} h={["197px"]} bg={"#42A7C3"}>
          <Image
            position={"absolute"}
            w={"100%"}
            h={"100%"}
            src="https://s3-alpha-sig.figma.com/img/d4f4/9952/37c462a1c541b7a812220d9a0ad0c7ce?Expires=1679875200&Signature=XQgdDg20KSFHjEetzwZYdILmITubkuNf96VTvQZwUonMNcbP6yySLBapZakm70CxJdeO8fpd-WirZwssIKXfiaabAwkZnvYithHyWWXz84~L-fMRo7dcdgSDI8wVVm~O~SWdU3cxqyKCLXK2F~SuyXWQNtz6y2~-j80RPtzY1vNJipGE49mElsgeNKNTnnG4vcrH5YwhdpNc3~~mJC-KSAIM0dmGUWnqUakAAobO1vBAByjllxSaM3lXwEfEmFb5wM6cWWP5~ZIWgmn9O9U3vLGcP1qERB3YAT-JIUxjaA4x9fvuk56PZZpuh3t0quVJhgEU7GSZov7k3oEcdG9VcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="wolrd-map"
          />
          <Box 
          display = "flex"
          flexDir={"column"}
          justifyContent = "center"
          flexWrap={"wrap"}
          alignContent = "center"
          >
            <Text
              textAlign={"center"}
              fontSize={["16px"]}
              fontWeight={"bold"}
              color={"white"}
              mt={5}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Button display="block" m={"auto"} mt={5} borderRadius={"20px"}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Show>

      <Text
        w={["250px", "300px", "300px", "380px"]}
        m={"auto"}
        mt={"100px"}
        textAlign={"center"}
        fontSize={["24px", "20px", "24px", "32px"]}
        fontWeight={"bold"}
      >
        What Our Clients Says About Us
      </Text>

      <Hide below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataforDesktop.map((el, index) => (
            <TestimonialCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataBelowDesktop.map((el, index) => (
            <TestimonialCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
};

export default Testimonials;
