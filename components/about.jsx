import Image from 'next/image'
import React from 'react'
import starImg from '../assets/imgs/star-img.png'
export default function About() {
  return (
    <section className='about section'>
        <div className='star-img-container h-1/6vh w-1/6vw relative top-5vh right-10vw'>
            <Image src={starImg} alt='star-icon' className='object-cover'/>
        </div>
        
    </section>
  )
}
