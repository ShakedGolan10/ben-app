import Image from 'next/image'
import React from 'react'
import nameImg from '@/assets/imgs/ben-name-title.png'
export default function HomePageHero() {
  
  return (
    <article className='home-page-hero absolute top-0 right-10vw'>
      <div className='hero-name-container'>
        <Image src={nameImg} alt='hero-name' className='object-cover h-33vh mobile:h-27vh max-w-25vh'/>
      </div>
      <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color relative bottom-10vh 
      mobile:bottom-9vh mobile:right-4vw smMobile:hidden'>
        הילד עם החיוך הנצחי
      </p>
      </article>
  )
}
