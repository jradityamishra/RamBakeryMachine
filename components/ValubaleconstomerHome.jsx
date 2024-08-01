import Image from 'next/image'
import React from 'react'

const ValubaleconstomerHome = () => {
  return (
   <div className='m-auto relative sm:w-[700px] w-[300px] h-[300px] sm:h-[450px] mt-5'>
    <Image
    src="/assets/images/ourCustomer.jpeg"
    layout="fill"
          
          alt="container"
          className="rounded-md"
    />
   </div>
  )
}

export default ValubaleconstomerHome