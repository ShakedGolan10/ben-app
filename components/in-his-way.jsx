'use client'
import Image from 'next/image'
import React from 'react'
import birdsPic from '@/assets/imgs/birds.png'
import moris from '@/assets/imgs/moris.jpeg'
import volunteer from '@/assets/imgs/volunteer.jpeg'
import benShirt from '@/assets/imgs/ben-shirt.jpg'
import { useRouter } from 'next/navigation'


export default function InHisWay() {

    const router = useRouter()

    return (
    <div className={`bg-bgc-white h-screen flex flex-col justify-around items-center relative max-h-70vh mobile:py-8`}>
        <section className='images-container absolute w-full h-full flex flex-col justify-between'>`
            <Image src={birdsPic} alt='birds in the background' id='up-photo' className='w-50vw h-full object-contain transform translate-x-[-35vw] translate-y-[-5vh] '/>
            <Image src={birdsPic} alt='birds in the background' id='bottom-photo' className='w-full h-full object-contain '/>
        </section>
        <section className='in-his-way-section h-full z-[2] flex flex-col justify-around items-center gap-2vh'>
        <article className='headlines flex flex-col gap-2vh'>
            <h1 className="text-center text-headline-font-color font-bold text-4xl ">ממשיכים את דרכו</h1>
            <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color smMobile:hidden'>
                את המצווה שעשיתי לך תעביר הלאה...
            </p>
        </article>
    <div className=" rounded-lg flex mobile:flex-col gap-2vw ">
      {/* First picture */}
      <Image src={moris} alt="Image of ben and tal" className="special-border-1 w-20vw h-35vh mobile:h-15vh mobile:object-contain mobile:w-40vw rounded-lg object-cover" />
      {/* Middle picture */}
      <Image src={volunteer} alt="Image of ben" className=" w-20vw h-35vh mobile:h-15vh mobile:object-contain mobile:w-40vw rounded-lg object-cover object-top" />

      {/* Third picture */}
      <Image src={benShirt} alt="Image of ben friends" className="special-border-2 w-20vw h-35vh mobile:h-15vh mobile:object-contain mobile:w-40vw rounded-lg object-cover" />
    </div>

    <div className="flex flex-col items-center justify-center relative">
            <button onClick={()=> router.push('/volunteer')} className="text-center
             text-headline-font-color text-lg p-4 font-medium 
            bg-bgc-buttons  rounded-xl">להנצחות והתנדבויות</button>
          </div> 
    </section>
  </div>
  )
}
