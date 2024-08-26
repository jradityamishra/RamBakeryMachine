'use client';

import { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { slide as Menu } from 'react-burger-menu'; // Import from react-burger-menu


const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger menu for mobile */}
      <div className="sm:hidden flex ">
        <button onClick={toggleMenu} className="hamburger-button m-auto">
          ☰
        </button>
        <Menu right isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
          <a href="#" className="menu-item" onClick={toggleMenu}>Home</a>
          <a href="#" className="menu-item" onClick={toggleMenu}>About</a>
          <a href="/products" className="menu-item" onClick={toggleMenu}>Products</a>
          <a href="#" className="menu-item" onClick={toggleMenu}>Sinmag</a>
          <a href="#" className="menu-item" onClick={toggleMenu}>Our Customer</a>
          <a href="#" className="menu-item" onClick={toggleMenu}>Product Line</a>
          <a href="#" className="menu-item" onClick={toggleMenu}>Contact Us</a>
        </Menu>
      </div>

      {/* Inline navbar for larger screens */}
      <div className="hidden sm:flex flex-row py-1 justify-around text-white items-center rounded-md" style={{ backgroundColor: "rgb(30 149 241)" }}>
        <a href="#" className='cursor-pointer'>
          Home
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="#" className='cursor-pointer'>
          About
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="/products" className='cursor-pointer'>
          Products
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="#">
          Sinmag
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="#">
          Our Customer
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="#">
          Product Line
        </a>
        <Separator.Root
          className='SeparatorRoot'
          decorative
          orientation="vertical"
        />
        <a href="#">
          Contact Us
        </a>
      </div>
    </>
  );
};

export default SubNavbar;
