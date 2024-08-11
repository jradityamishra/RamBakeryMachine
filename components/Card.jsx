'use'
'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';

const Card = ({ data }) => {
  useEffect(() => { console.log(data) }, [])
  const handleData=(id)=>{

  }
  return (
    <>
      {data.map((item, index) => (
        <Link href={`products/${item._id}`} key={index}>
          <section className='w-80 m-2 p-0 max-w-sm rounded-lg border border-gray-200 shadow hover:drop-shadow-3xl dark:bg-gray-800 dark:border-gray-700'>
            <div className="bg-white">
              <img className="p-8 rounded-t-lg" src={item.coverImage} alt="product image" />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight orange_gradient dark:text-white">
                  {item.category} {/* Assuming `item.title` contains product name */}
                </h5>
              </div>
            </div>
            <div className='cursor-pointer text-blue-600 w-full h-9 bg-slate-200 flex-center font-bold' onClick={handleData(item._id)}>View All</div>
          </section>
        </Link>
      ))}
    </>
  );
};

export default Card;
