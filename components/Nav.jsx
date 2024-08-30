"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-2 sm:mb-8 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.jpeg'
          alt='logo'
          width={40}
          height={40}
          className='object-contain'
        />
        <p className='logo_text'>RamBakeryMachines</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`}>
              <Image
                src="/assets/images/ws.png"
                height={37}
                width={37}
                alt="whatsapp images"
                className="rounded-md"
              />
            </Link>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            <div className="flex">
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>

                </div>
              )}
              {/* Hamburger Menu */}
              <div className="flex sm:relative sm:justify-start sm:flex-col sm:items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="hamburger-button m-auto"
                  ref={buttonRef}
                >
                  ☰
                </button>
                <Menu
                  right
                  isOpen={isOpen}
                  onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                  className="bm-menu"
                  ref={menuRef}
                >
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className=' menu-item'
                  >
                    Sign Out
                  </button>
                  <Link href="/" className="menu-item" onClick={toggleMenu}>Home</Link>
                  <Link href="/about" className="menu-item" onClick={toggleMenu}>About</Link>
                  <Link href="/products" className="menu-item" onClick={toggleMenu}>Products</Link>
                  <Link href="/sinmag" className="menu-item" onClick={toggleMenu}>Sinmag</Link>
                  <Link href="/OurCustomer" className="menu-item" onClick={toggleMenu}>Our Customer</Link>
                  {/* <Link href="#" className="menu-item" onClick={toggleMenu}>Product Line</Link> */}
                  <Link href="/contactUs" className="menu-item" onClick={toggleMenu}>Contact Us</Link>
                </Menu>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex sm:relative sm:justify-start sm:flex-col sm:items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="hamburger-button m-auto"
                ref={buttonRef}
              >
                ☰
              </button>
              <Menu
                right
                isOpen={isOpen}
                onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                className="bm-menu mt-5"
                ref={menuRef}
              >
                {providers &&
                  Object.values(providers).map((provider) => (
                    <Link
                      href='#'
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className='menu-item'
                    >
                      Sign in
                    </Link>
                  ))}
                <Link href="/" className="menu-item" onClick={toggleMenu}>Home</Link>
                <Link href="/about" className="menu-item" onClick={toggleMenu}>About</Link>
                <Link href="/products" className="menu-item" onClick={toggleMenu}>Products</Link>
                <Link href="/sinmag" className="menu-item" onClick={toggleMenu}>Sinmag</Link>
                <Link href="/OurCustomer" className="menu-item" onClick={toggleMenu}>Our Customer</Link>
                {/* <Link href="#" className="menu-item" onClick={toggleMenu}>Product Line</Link> */}
                <Link href="/contactUs" className="menu-item" onClick={toggleMenu}>Contact Us</Link>
              </Menu>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
