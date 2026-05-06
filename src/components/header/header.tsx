'use client';
import Image from 'next/image'
import navbarLinks from './header.json'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

type HeaderProps = {
  passHeaderHeight: (height: number) => void;
};

const Header = ({ passHeaderHeight }: any) => {
  const [hamburger, setHamburger] = useState(false);

  // Toggle body class
  useEffect(() => {
    document.body.classList.toggle("active", hamburger);
  }, [hamburger]);

  // Header height
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);      // store locally
        passHeaderHeight(height); // send to parent
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [passHeaderHeight]);

  // AUTO CLOSE on desktop resize (IMPORTANT FIX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setHamburger(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile Menu
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <header className='site-header bg-white shadow-2xl py-4' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/header-logo.png"
              width={190}
              height={90}
              alt='Header Logo'
              className='max-sm:max-w-32'
            /></a>
          <nav className='navbar flex -mx-4'>
            {/* <ul className='hidden px-4 lg:flex items-center -mx-4 [&_li]:px-4'>
              {navbarLinks.links.map((item, index) => (
                <li key={index}><a className='link' href={item.path}>{item.label}</a></li>
              ))}
            </ul> */}
            <ul className='hidden px-4 lg:flex items-center -mx-4'>
              {navbarLinks.links.map((item) => (
                <li key={item.label} className="relative group px-4">

                  {/* Parent Link */}
                  <a href={item.path} className="link flex items-center gap-1">
                    {item.label}
                    {item.dropdown && <span className="text-xs transition-all duration-300 group-hover:rotate-180"><i className="icon-dropdown"></i></span>}
                  </a>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-60 z-50">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <a href={subItem.path} className="block px-4 py-3 text-sm text-dark hover:bg-primary hover:text-white transition">
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}
            </ul>
            <div className="mobile-menu" style={{ top: `${headerHeight}px` }}>
              <ul className='px-4 flex flex-col gap-y-7 justify-center items-center -mx-4 [&_li]:px-4'>
                {/* {navbarLinks.links.map((item, index) => (
                  <li key={index}><a className='link' href={item.path}>{item.label}</a></li>
                ))} */}

                {/* {navbarLinks.links.map((item) => (
                  <li key={item.label} className="relative group">
                 
                    <span className='flex'>
                      <a href={item.path} className="link flex items-center gap-1">
                        {item.label}
                      </a>
                      {item.dropdown && <button className="link mx-2 text-xs transition-all duration-300 group-hover:rotate-180 hover:before:hidden" onClick={() =>setOpenMenu(openMenu === item.label ? null : item.label)}><i className="icon-dropdown"></i></button>}
                    </span>

                    {item.dropdown && openMenu === item.label && (
                      <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-60 z-50">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.path}
                              className="block px-4 py-2 text-sm text-dark hover:bg-primary hover:text-white transition"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                  </li>
                ))} */}

                {navbarLinks.links.map((item) => (
                  <li key={item.label} className="w-full text-center">

                    {/* Parent row */}
                    <div className="flex justify-center items-center gap-2">
                      <a
                        href={item.path}
                        className="link"
                        onClick={() => setHamburger(false)}
                      >
                        {item.label}
                      </a>

                      {item.dropdown && (
                        <button onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)
                        } className="relative text-xs bg-primary hover:bg-secondary p-1 rounded group transition-all duration-300">
                          <i
                            className={`icon-dropdown before:text-white transition-transform ${openMenu === item.label ? "rotate-180" : ""
                              }`}
                          ></i>
                          <span className='bg-dark p-1 absolute -right-8 top-1/2 -translate-y-1/2 rounded hidden group-hover:block'>Click</span>
                        </button>
                      )}
                    </div>

                    {/* Dropdown (NO absolute, NO hover) */}
                    {item.dropdown && openMenu === item.label && (
                      <ul className="mt-3 inline-flex flex-col gap-3 bg-secondary rounded shadow">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label} className='hover:bg-dark-blue hover:text-white transition-all duration-300 py-2'>
                            <a
                              href={subItem.path}
                              onClick={() => setHamburger(false)}
                              className="text-sm text-white"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-4 sm:gap-8 px-4'>
              <button className="hambBurger cursor-pointer" onClick={() => setHamburger(!hamburger)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <a href="tel:9865900739" className='btn btn-primary max-md:size-12 max-md:flex max-md:justify-center max-md:items-center'>
                <i className="icon-phone md:pr-1"></i>
                <span className='max-md:hidden'>Call Today</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
