import Image from "next/image";
import SubNavbar from "@components/SubNavbar";
import Heading from "@components/Heading";
import SmallSlider from "@components/SmallSlider";
import QBE_home from "@components/QBE_home";
import ValubaleconstomerHome from "@components/ValubaleconstomerHome";
import ImageSlider from "@components/ImgesSlider";
import Youtubeslider from "@components/Youtubeslider";

const Home = () => (
  <>
    <div className="w-[100%] pb-10">
      <SubNavbar />
      <ImageSlider />
      <Heading props="Our Top Products" />
      <SmallSlider />
      <QBE_home />

      <Heading props="OUR VALUABLE CUSTOMERS" />
      <ValubaleconstomerHome />
      <Heading props="YOUTUBE VIDEO" />
      <Youtubeslider/>
    </div>



  </>
);

export default Home;
