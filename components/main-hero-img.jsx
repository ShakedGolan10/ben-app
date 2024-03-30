import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/imgs/benHeroImg.jpeg'
export default function MainHeroImg() {
  return (
    <section className='main-hero-img-container full max-h-75vh w-auto '>
            <Image priority src={heroImg} alt='hero-img' className='object-cover object-heroImgMobile lg:object-heroImg md:object-heroImgTablet
             sm:object-heroImgMobile'/>
    </section>
  )
}
