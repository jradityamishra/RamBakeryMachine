import Image from "next/image";
import Link from "next/link";
import Heading from "@components/Heading";
import SmallSlider from "@components/SmallSlider";
import QBE_home from "@components/QBE_home";
import ValubaleconstomerHome from "@components/ValubaleconstomerHome";
import ImageSlider from "@components/ImgesSlider";
import Youtubeslider from "@components/Youtubeslider";
import CustomerReview from "@components/CustomerReview";

const Home = () => (
  <>
    <div className="fixed bottom-10 right-16 z-10">
      <Link href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`}>
        <Image
          src='/assets/images/ws.png'
          alt='logo'
          width={60}
          height={60}
          className='object-contain'
        />

      </Link>
    </div>
    <div className="w-[100%] pb-10">

      <ImageSlider />
      <Heading props="Our Top Products" />
      <SmallSlider />
      <QBE_home />

      <Heading props="OUR VALUABLE CUSTOMERS" />
      <ValubaleconstomerHome />
    
      <CustomerReview />
      <Heading props="YOUTUBE VIDEO" />
      <Youtubeslider />
    </div>



  </>
);

export default Home;
