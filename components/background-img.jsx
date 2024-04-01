import Image from 'next/image'
import React from 'react'
export default function BackgroundImage({imgSrc, adjustImageStyleTailwindString = ''}) {
  return (
    <section className='main-hero-img-container full max-h-75vh w-auto '>
            <Image priority src={imgSrc} alt='hero-img' className={`object-cover object-heroImgSetZero ${adjustImageStyleTailwindString}`}/>
    </section>
  )
}
