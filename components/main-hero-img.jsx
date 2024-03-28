import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/imgs/benHeroImg.jpeg'
export default function MainHeroImg() {
  return (
    <section className='main-hero-img-container h-3/5vh w-fullvw'>
            <Image src={heroImg} alt='hero-img' className='object-cover object-heroImg'/>
    </section>
  )
}
