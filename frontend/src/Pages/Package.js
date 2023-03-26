import { Box } from "@chakra-ui/react";

import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Help from "../Components/Help";
import Navbar from "../Components/NavBar";
import PackageInfo from "../Components/PackageInfo";
import TravelForm from "../Components/TravelForm";
import PackageBanner from "../Components/PackageBanner";

const Package = ({isLoggedIn, setFetchAgain, fetchAgain}) => {
  return (
    <div>
      <Navbar isLoggedIn = {isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain={fetchAgain} />
      <PackageBanner />
      <Box
        display="flex"
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        px="4vw"
        gap="2vw"
        justifyContent={"space-between"}
      >
        <Box maxWidth={{ lg: "60%", md: "60%", sm: "100%", base: "100%" }}>
          <PackageInfo />
        </Box>
        <Box
          display={"flex"}
          flexDir="column"
          justifyContent={"space-between"}
          flexWrap="wrap"
          alignContent={"center"}
          pb={{ lg: "300px", md: "300px", sm: "", base: "" }}
          gap={{ sm: "10vh", base: "10vh" }}
        >
          <TravelForm />
          <Help />
          <Box
            display="flex"
            justifyContent={"center"}
            // maxWidth={{ sm: "70%", base: "70%", lg: "auto"}}
            flexWrap="wrap"
            alignContent={"center"}
            alignItems="center"
            p="2px"
            // border = "5px solid red"
            // minWidth={{lg: "100%", md: "100%"}}
          >
            <Faq />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Package;
