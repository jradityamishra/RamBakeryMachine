import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-neutral-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <Link href="/" className='flex gap-2 flex-center'>
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src='/assets/images/logo.jpeg'
                alt='logo'
                width={60}
                height={60}
                className='object-contain text-white'
              />
              <p className='text-white'>RamBakeryMachines</p>
            </div>
          </Link>
          <p className="mt-2 text-sm text-gray-500">Manufacturer of Industrial Proofers, Planetary Mixers & Divider Rounders offered by Ram Bakery Machines from Kolkata, West Bengal, India.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/">
                  <span className="text-gray-600 hover:text-gray-800">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-600 hover:text-gray-800">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-600 hover:text-gray-800">Products</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-600 hover:text-gray-800">Sinmag</span>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <span className="text-gray-600 hover:text-gray-800">Contact Us</span>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Products</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/products/1">
                  <span className="text-gray-600 hover:text-gray-800">Plantery Mixture</span>
                </Link>
              </li>
              <li>
                <Link href="/products/2">
                  <span className="text-gray-600 hover:text-gray-800">Spiral Mixture</span>
                </Link>
              </li>
              <li>
                <Link href="/products/3">
                  <span className="text-gray-600 hover:text-gray-800">Bowl Lifter and Tipper</span>
                </Link>
              </li>
              <li>
                <Link href="/products/4">
                  <span className="text-gray-600 hover:text-gray-800">Divider Rounders</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-600 hover:text-gray-800">Check More..</span>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Details</h2>
            <nav className="list-none mb-10">
              <p className="text-gray-600">Mobile No:+919461220842</p>
              <p className="text-gray-600 " style={{ wordBreak: 'break-word' }}>Email:info.rambakerymachinesengineer@gmail.com</p>
              <br />
              <p>Address:102, North Purbachal Haltu, Kolkata</p>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 RamBakeryMachines All right reserved.</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <path d="M17.5 6.5h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 01-5 5.91V14h1a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2h-2a2 2 0 01-2-2h-1v1.09a6 6 0 115.32-5.31 6 6 0 01-5.31 5.31V10a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2h-2a2 2 0 01-2-2H9v4.09A6 6 0 0116 8z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
