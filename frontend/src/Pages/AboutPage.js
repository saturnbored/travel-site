import Navbar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Reviews from "../Components/Reviews";
import Certificate from "../Components/Certificate";
import AboutBanner from "../Components/AboutBanner";

const AboutPage = ({isLoggedIn, setFetchAgain, fetchAgain}) => {
  return (
    <div>
      <Navbar isLoggedIn = {isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain={fetchAgain} />
      <AboutBanner />
      <Team />
      <Reviews />
      <Certificate />
      <Footer />
    </div>
  );
};

export default AboutPage;
