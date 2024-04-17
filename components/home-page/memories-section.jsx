'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import img1 from '@/assets/imgs/our-story-teaser-img-1.jpg'
import img2 from '@/assets/imgs/our-story-teaser-img-2.jpg'
import img3 from '@/assets/imgs/our-story-teaser-img-3.jpg'
import benHeartHandwrite from '@/assets/imgs/ben-heart-handwrite.png'
import '@/styles/modules/border.scss'
import { useRouter } from 'next/navigation';

export default function MemoriesSection() {
    const router = useRouter()
    return (
        <div className={`full bg-bgc-stories-section h-screen flex flex-col justify-around items-center `}>
          <h1 className="text-center text-headline-font-color font-bold text-4xl ">הסיפורים והרגעים ביחד</h1>
          <div className=" rounded-lg flex mobile:flex-col gap-2vw">
            {/* First picture */}
            <Image src={img1} alt="Image of ben and tal" className="special-border-1 w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover" />
            {/* Middle picture */}
            <Image src={img2} alt="Image of ben" className=" w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover object-top" />
    
            {/* Third picture */}
            <Image src={img3} alt="Image of ben friends" className="special-border-2 w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover" />
          </div>
    
          {/* Hebrew text above the pictures */}
    
          {/* Hebrew text and heart icon below the pictures */}
          <div className="flex flex-col items-center justify-center relative">
            <button onClick={()=> router.push('/memories')} className="text-center text-headline-font-color text-lg p-4 font-medium mobile:bg-bgc-white bg-bgc-nav-bar-upper rounded-xl">לכל הזכרונות והסיפורים</button>
            <Image src={benHeartHandwrite} alt='ben heart handwrite' className='mobile:hidden absolute -top-2vh left-8vw 1100px:left-23vw w-15vw h-15vh object-cover'/>
            <Image src={benHeartHandwrite} alt='ben heart handwrite' className='mobile:hidden absolute -top-10vh left-8vw 1100px:left-23vw w-20vw h-20vh object-cover'/>
          </div>        
        </div>
      );
}


