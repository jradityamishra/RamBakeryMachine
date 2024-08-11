'use client'
import * as Separator from '@radix-ui/react-separator';

const SubNavbar = () => {
  return (
    <div className="hidden sm:flex flex py-1 justify-around text-white items-center rounded-md" style={{ backgroundColor: "rgb(30 149 241)" }}>
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
  );
};

export default SubNavbar;
