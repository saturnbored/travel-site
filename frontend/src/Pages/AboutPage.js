import Navbar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Reviews from "../Components/Reviews";
import Certificate from "../Components/Certificate";
import AboutBanner from "../Components/AboutBanner";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <Team />
      <Reviews />
      <Certificate />
      <Footer />
    </div>
  );
};

export default AboutPage;
