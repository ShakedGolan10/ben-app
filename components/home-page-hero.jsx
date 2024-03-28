import Image from 'next/image'
import React from 'react'
import nameImg from '../assets/imgs/ben-name-title.png'
export default function HomePageHero({ children }) {
  return (
    <section className='home-page-hero'>
      {children}
      <h1 className='hero-name-container bottom-40vh h-2/6vh w-20vw relative'>
        <Image src={nameImg} alt='hero-name' className='object-cover'/>
      </h1>
      </section>
  )
}
