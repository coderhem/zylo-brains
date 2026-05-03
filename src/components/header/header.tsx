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
            <ul className='hidden px-4 lg:flex items-center -mx-4 [&_li]:px-4'>
              {navbarLinks.links.map((item, index) => (
                <li key={index}><a className='link' href={item.path}>{item.label}</a></li>
              ))}
            </ul>
            <div className="mobile-menu" style={{ top: `${headerHeight}px` }}>
              <ul className='px-4 flex flex-col gap-y-7 justify-center items-center -mx-4 [&_li]:px-4'>
                {navbarLinks.links.map((item, index) => (
                  <li key={index}><a className='link' href={item.path}>{item.label}</a></li>
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
