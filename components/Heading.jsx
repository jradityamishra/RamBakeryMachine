import Separtor from '@component/ui/Separtor'
import React from 'react'

const Heading = ({props}) => {
  return (
    <div className='flex flex-col flex-center'>
        <h1 className='mt-5 mb-3 text-2xl font-extrabold leading-[1.15] text-black sm:text-4xl'>{props}</h1>
        <Separtor orientation="horizontal"/>
    </div>
  )
}

export default Heading