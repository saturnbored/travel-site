import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import Logo from "./Logo";
import FooterModal from "./FooterModal";
import SocialButton from "./Miscellaneous/SocialButton";

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       href={href}
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       transition={"background 0.3s ease"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      display = "flex"
      flexDir={'column'}
      justifyContent = "center"
      alignItems={'center'}
      mt = {"20vh"}
    >
        <FooterModal/>
      <Container as={Stack} minW={"100vw"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={20}
          justifyContent = 'space-between'
          pl={'10px'}
        >
          <Stack spacing={6}>
            <Box display={'flex'} gap = '20px' flexDirection={'column'}>
              <Logo color={useColorModeValue("gray.700", "white")} />
              <Text fontSize={"sm"} textAlign="left" maxWidth={'20vw'}>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </Text>
            </Box>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Blogs</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Join Us</Link>
            {/* <Link href={"#"}>Testimonials</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            <Link href={"#"}>Project</Link>
            <Link href={"#"}>Lorem</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Our Story</Link>
            {/* <Link href={"#"}>Satus</Link> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link href={"#"}>abc@lorem.com</Link>
            <Link href={"#"}>India</Link>
          </Stack>
          {/* </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
