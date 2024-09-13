'use client'
import Heading from '@components/Heading'
import Card from "@components/CardDetails"
import React, { useEffect, useState } from 'react'
import { productDetails } from "../../../data/product_details";
const page = ({ params }) => {
  const [data, setData] = useState([]);
  const [name,setName]=useState();
  useEffect(() => {
    if (params.id) {
      const fetchdata = () => {
        const product = productDetails.filter(item => item._id == params.id);
        console.log(product[0].category);
        if (product) {
          // 
         
          const pdata=product[0].data;
          setName(product[0].category);
         setData(pdata);
        }
      }
      fetchdata();
    }
    if(data){
      console.log(data);
    }
  }, [])
  console.log(params.id)
  return (
    <div>
      <div className='mb-3'>
        <Heading props={name} />
      </div>
      <div className='flex flex-wrap flex justify-center'>
       <Card data={data}/>
      </div>
    </div>
  )
}

export default page