'use client';

import { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { slide as Menu } from 'react-burger-menu';
import Link from "next/link";
const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger menu for mobile */}


      {/* Inline navbar for larger screens */}
      <div
        className="hidden md:flex w-full items-center text-white rounded-md bg-blue-500 sm:py-1 md:py-2 lg:py-3 justify-around md:justify-between lg:justify-evenly"
      >

        <Link href="/" className='cursor-pointer'>
          Home
        </Link>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <Link href="/about" className='cursor-pointer'>
          About us
        </Link>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <Link href="/products" className='cursor-pointer'>
          Products
        </Link>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <Link href="/sinmag">
          Sinmag
        </Link>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <Link href="/OurCustomer">
          Our Customer
        </Link>

        {/* <Link href="#">
          Product Line
        {/* </Link> */}
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <Link href="/contactUs">
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default SubNavbar;
