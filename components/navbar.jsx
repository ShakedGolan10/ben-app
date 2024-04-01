'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import benLogo from '../public/ben.JPG'
import '@/styles/modules/navbar.scss'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks = [
    { id: 2, label: "הסיפור שלי", link: "/my-story", icon: null },
    { id: 3, label: "הסיפורים שלנו", link: "/our-stories", icon: null },
    { id: 4, label: "התנדבויות", link: "/bens-charity", icon: null },
    { id: 5, label: "הבלוג של בן", link: "/bens-blog", icon: null },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.addEventListener('resize' , () => {
      setIsOpen(false)
    })
   
    return window.removeEventListener('resize',()=> {setIsOpen(false)})
  };

  return (
    <>
    {isOpen && <div className='black-screen bg-black opacity-50 z-10 absolute h-100vh w-100vw'></div>}
    <nav className='w-full pr-right-padding-nav bg-bgc-nav-bar-upper h-navbar-height flex flex-row justify-start items-center mobile:justify-between gap-nav-gap mobile:gap-8vw'>
      <div className='logo-container h-logo-img-h w-logo-img-w'>
        <Image className='bg-gray-500' src={benLogo} alt='page-logo' />
      </div>
      <div className='mobile:hidden links-div flex flex-row justify-around items-center gap-nav-links-gap mobile:gap-2vw'>
        {navbarLinks.map(({ id, label, link }) => (
          <Link onClick={()=>setIsOpen(false)} key={id} href={link} className='no-underline font-medium mobile:text-small'>
            {label}
          </Link>
        ))}
      </div>
      <div className={`z-20 ${isOpen ? 'bg-app-blue' : ''}`}>
      <div className='hamburger-menu mobile:block' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <div className='side-modal mobile:block '>
          {navbarLinks.map(({ id, label, link }) => (
            <Link onClick={()=>setIsOpen(false)} key={id} href={link} className='no-underline font-medium mobile:text-small'>
              {label}
            </Link>
          ))}
        </div>
      )}
      </div>
    </nav>
    </>
  );
}
