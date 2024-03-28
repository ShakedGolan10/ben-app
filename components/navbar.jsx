import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import benLogo from '../public/ben.JPG'
export default function Navbar() {


  const navbarLinks = [
    { id: 2, label: "הסיפור שלי", link: "/my-story", icon: null },
    { id: 3, label: "הסיפורים שלנו", link: "/our-stories", icon: null },
    { id: 4, label: "התנדבויות", link: "/bens-charity", icon: null },
    { id: 5, label: "הבלוג של בן", link: "/bens-blog", icon: null },
  ];


  return (
    <nav className='w-full pr-right-padding-nav bg-bgc-nav-bar-upper h-navbar-height flex flex-row justify-start items-center gap-nav-gap'>
      <div className='logo-container h-logo-img-h w-logo-img-w'>
      <Image className='bg-gray-500' src={benLogo} alt='page-logo' />
      </div>
        <div className='links-div flex flex-row justify-around items-center gap-nav-links-gap'>
        {navbarLinks.map(({ id, label, link }) => (
          <Link key={id} href={link}
            className='no-underline font-medium'>
            {label}
          </Link>
        ))}
  </div>
    </nav>
  )
}
