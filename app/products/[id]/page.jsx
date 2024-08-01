import Heading from '@components/Heading'
import Card from '@components/Card'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='mb-3'>
        <Heading props="product name"/>
        </div>
        <div className='flex flex-wrap flex justify-center'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default page