import Image from 'next/image';
import React from 'react';

const QBE_home = () => {
  return (
    <div className="relative mt-5 sm:mt-0 md:mt-0 w-full h-auto">
      <div className="relative w-full h-[300px] sm:h-[450px]">
        <Image
          src="/assets/images/QBEImages.jpeg"
          layout="fill"
          objectFit="cover"
          alt="container"
          className="rounded-md"
        />
        <div className="sm:w-[600px] sm:h-[400px] w-[200px] absolute inset-0 flex flex-col justify-center items-start p-5 text-black bg-opacity-50 bg-white rounded-md m-5 sm:m-10">
          <h1 className="blue_gradient text-[18px] sm:text-3xl font-extrabold leading-tight">
            QUALITY BAKERY EQUIPMENTS
          </h1>
          <h2 className="text-[10px] sm:text-xl mt-4">
            To Produce Good And Healthy Food Equipments
          </h2>
          <p className="mt-5 text-[5px] sm:text-sm" >
            Ram Bakery machines is one of the leading importers and manufacturers of bakery equipment for bakeries, hotels, and other institutions catering to the needs of the food industry in India.<br />
            <br />
            Ram Bakery machines offer a wide range of Sinmag Bakery machines and Kitchen Equipment, and refrigeration Equipment as well. We offer free installation and after-sales services.<br />
            <br />
            Ram Bakery machines’ strength in engineering maintenance and providing after-sales services with excellent backup has further gained confidence from the smallest bakers to the largest bakers across all categories from bakers in small.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QBE_home;
