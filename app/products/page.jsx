import Card from '@components/Card';
import Heading from '@components/Heading';
import React from 'react';
import { productDetails } from "../../data/product_details";

const Page = () => {
  return (
    <>
      <div className='w-full'>
        <div>
          <Heading props="Our All Products Variation" />
          <h2 className='mt-5 mb-5 text-sm mx-2 sm:text-xl sm:mx-8'>
            We are offering <span className='font-bold text-slate-600'>
              Industrial Proofers and Divider Rounders, Deck Ovens, Planetary Mixers, Spiral Mixers, Slicer Machines, Dough Sheeter, Convection Ovens, Rack Ovens and many more.
            </span>
          </h2>
        </div>
        <div className='flex flex-wrap justify-center'>
          <Card data={productDetails} />
        </div>
      </div>
    </>
  );
};

export default Page;
