import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
<>
<Link href='#'>
<section className='w-80 m-2 p-0 max-w-sm rounded-lg border border-gray-200 shadow hover:drop-shadow-3xl dark:bg-gray-800 dark:border-gray-700'>
<div class="bg-white " >
    <a href="#">
        <img class="p-8 rounded-t-lg" src="/assets/images/logo.jpeg" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight orange_gradient dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>       
    </div>

</div>
<div className='cursor-pointer text-blue-600 w-full h-9 bg-slate-200 flex-center font-bold'>View All</div>
</section>
</Link>
</>
  )
}

export default Card