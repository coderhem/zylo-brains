'use client';
import Image from 'next/image'
import navbarLinks from './header.json'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Data from '@/api/data.json'

type HeaderProps = {
  passHeaderHeight: (height: number) => void;
  link: string;
  linkText: string;
  anchorText: string;
};

const Header = ({ passHeaderHeight }: any) => {
  const [hamburger, setHamburger] = useState(false);
  // Add scroll class on body after 40px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        document.body.classList.add("scroll");
      } else {
        document.body.classList.remove("scroll");
      }
    };

    // RUN IMMEDIATELY ON PAGE LOAD
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    window.addEventListener("scroll", updateHeight);

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
    <header className='site-header bg-white shadow-2xl' ref={headerRef}>
      <div className="top-header bg-secondary py-2 text-white">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
            <div className="flex gap-2 justify-between">
              {Data.footerLinks?.length > 0 && (
                <ul className='flex gap-4 py-1'>
                  {Data.footerLinks[0].socialLinks.map((item, index) => (
                    <li key={index}>
                      <a href={item.iconLink} className='transition-all duration-300 bg-white/10 hover:bg-primary focus:bg-primary ring-1 ring-transparent focus:ring-white active:bg-primary size-7 flex justify-center items-center rounded-lg text-white text-base'>
                        <i className={`${item.iconClass}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className='flex items-center gap-4'>
              {navbarLinks.topHeaderLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.iconLink} className='transition-all duration-300 flex gap-2 items-center text-white group hover:text-primary'>
                    <i className={`${item.iconClass} transition-all duration-300 bg-white/20 size-7 inline-flex justify-center items-center text-xs rounded group-hover:bg-white`}></i>
                    <span className='max-md:hidden'>{item.anchorText}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image
              src="/images/header-logo-img.png"
              width={190}
              height={90}
              alt='Header Logo'
              className='max-sm:max-w-32'
            /></Link>
          <nav className='navbar flex -mx-4'>
            <ul className='hidden px-4 lg:flex items-center -mx-4'>
              {navbarLinks.links.map((item) => (
                <li key={item.label} className="relative group px-4">

                  {/* Parent Link */}
                  <Link href={item.path} className="link flex items-center gap-1">
                    {item.label}
                    {item.dropdown && <span className="text-xs transition-all duration-300 group-hover:rotate-180"><i className="icon-dropdown"></i></span>}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-60 z-50">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <Link href={subItem.path} className="block px-4 py-3 text-sm text-dark hover:bg-primary hover:text-white transition">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}
            </ul>
            <div className="mobile-menu" style={{ top: `${headerHeight}px` }}>
              <ul className='px-4 flex flex-col gap-y-7 justify-center items-center -mx-4 [&_li]:px-4'>
                {navbarLinks.links.map((item) => (
                  <li key={item.label} className="w-full text-center">

                    {/* Parent row */}
                    <div className="flex justify-center items-center gap-2">
                      <Link
                        href={item.path}
                        className="link"
                        onClick={() => setHamburger(false)}
                      >
                        {item.label}
                      </Link>

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
                            <Link href={subItem.path} onClick={() => setHamburger(false)}
                              className="text-sm text-white"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                  </li>
                ))}
              </ul>
            </div>
            <button className="hambBurger cursor-pointer" onClick={() => setHamburger(!hamburger)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
