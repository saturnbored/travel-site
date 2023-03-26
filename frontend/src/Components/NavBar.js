import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDown } from "react-icons/ai";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Links = [
  ["Find Reservations", "#"],
  ["Packages", "/package"],
  ["About Lakshadweep", "#"],
  ["About Us", "/about"],
  ["GoI", "/team"],
  ["Support", "#"],
];

const NavLink = ({ children, _url }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    display="flex"
    gap={"6px"}
    href={_url}
  >
    {children}
  </Link>
);

export default function Navbar({isLoggedIn, fetchAgain, setFetchAgain}) {

  console.log('herhehrej', isLoggedIn);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session");
    setFetchAgain(!fetchAgain);
    navigate('/');
  }

  return (
    <>
      <Box bg={"#cafcff"} px={4} marginBottom={"0"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          minHeight="15vh"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <a href="/">
                <Logo />
              </a>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link[0]} _url={link[1]}>
                  {link[0]}{" "}
                  {link[0] === "Packages" || link[0] === "About Lakshadweep" ? (
                    <AiOutlineDown />
                  ) : (
                    ""
                  )}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {!(isLoggedIn.status) ? (
              <>
                <Button rounded={"full"}>
                  <a href="/signin">Login</a>
                </Button>
                <Button
                  px={4}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="/">Sign Up</a>
                </Button>
              </>
            ) : (
              <>
              {(!isLoggedIn.isAdmin)?
              (<></>):<Button rounded={"full"}>
              <a href="/signin">Admin</a>
            </Button>}
              <Button
                px={4}
                fontSize={"sm"}
                rounded={"full"}
                bg={"red.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "red.500",
                }}
                _focus={{
                  bg: "red.500",
                }}

                onClick = {handleLogout}

              >
                <a href="/">Log Out</a>
              </Button>
              </>
            )
          }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link[0]} _url={link[1]}>
                  {link[0]}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
