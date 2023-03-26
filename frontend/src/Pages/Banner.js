import { Box } from "@chakra-ui/react";
import AdminBanner from "../Components/AdminBanner";
import Flights from "../Components/Flights";
import Footer from "../Components/Footer";
import Island from "../Components/Island";
import Navbar from "../Components/NavBar";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";
import UpdateBanner from "../Components/UpdateBanner";

const Banner = () => {
  return (
    <>
      {/* <Box display={"flex"} flexDir = "column" justifyContent={"center"} gap = "100px"> */}
      <Navbar />
      <AdminBanner />
      <UpdateBanner />
      <Footer />
      {/* </Box> */}
    </>
  );
};

export default Banner;
