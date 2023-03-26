import { Box } from "@chakra-ui/react";
import TeamBanner from "../Components/TeamBanner";
import Flights from "../Components/Flights";
import Footer from "../Components/Footer";
import Island from "../Components/Island";
import Navbar from "../Components/NavBar";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";
import TeamMembers from "../Components/TeamMembers";
import AdminPanel from "../Components/AdminPanel";

const Admin = ({isLoggedIn, setFetchAgain, fetchAgain}) => {
  return (
    <>
      {/* <Box display={"flex"} flexDir = "column" justifyContent={"center"} gap = "100px"> */}
      <Navbar isLoggedIn = {isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain={fetchAgain} />
      <AdminPanel />
      <Footer />
      {/* </Box> */}
    </>
  );
};

export default Admin;
