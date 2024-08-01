import Image from "next/image";
import SubNavbar from "@components/SubNavbar";
import Heading from "@components/Heading";
import SmallSlider from "@components/SmallSlider";
import QBE_home from "@components/QBE_home";
import ValubaleconstomerHome from "@components/ValubaleconstomerHome";
const Home = () => (
  <>
    <div className="w-[100%] pb-10">
      <SubNavbar />
      <div className="pt-5">

        <div className="relative w-full sm:h-[350px] h-[250px]">
          <Image
            src="/assets/images/container.jpeg"
            layout="fill"
            objectFit="cover"
            alt="contaier"
            className="dark-overlay rounded-md"
          />
          <div className="overlay absolute inset-0 bg-black opacity-60"></div>
        </div>

      </div>
      <section className='w-full flex-center flex-col absolute sm:top-[175px] top-[115px] left-[2px])'>
        <h1 className='head_text text-center'>
          Ram Bakery Machines
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> & Engineers</span>
        </h1>
        <p className='desc text-center'>
          We “Ram Bakery Machines” are Exporter,Wholesaler,Manufacturer,Trader,Supplier,Retailer,
          <br />Distributor,Importer,Trader of an Planetary Mixers,Deck Ovens,Convection Ovens, Rack Ovens etc
        </p>


      </section>
      <Heading props="Our Top Products" />
      <SmallSlider />
      <QBE_home />

      <Heading props="OUR VALUABLE CUSTOMERS" />
      <ValubaleconstomerHome/>
    </div>



  </>
);

export default Home;
