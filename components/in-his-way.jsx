import Image from 'next/image'
import React from 'react'
import birdsPic from '@/assets/imgs/birds.png'
export default function InHisWay() {
  return (
    <div className={`bg-bgc-white h-screen flex flex-col justify-around items-center relative`}>
      <Image src={birdsPic} alt='birds in the background' className='absolute w-100vw h-100vh object-contain top-1vh left-2vw'/>
      <Image src={birdsPic} alt='birds in the background' className='absolute w-100vw h-100vh object-contain top-3vh left-4vw'/>
        <section className='in-his-way-section '>
        <article className='headlines flex flex-col gap-2vh'>
            <h1 className="text-center text-headline-font-color font-bold text-4xl ">ממשיכים את דרכו</h1>
            <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color smMobile:hidden'>
                את המצווה שעשיתי לך תעביר הלאה...
            </p>
        </article>
    <div className=" rounded-lg flex mobile:flex-col gap-2vw">
      {/* First picture */}
      {/* <Image src={benTalPic} alt="Image of ben and tal" className="special-border-1 w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover" /> */}
      {/* Middle picture */}
      {/* <Image src={benPic} alt="Image of ben" className=" w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover object-top" /> */}

      {/* Third picture */}
      {/* <Image src={benGroupPic} alt="Image of ben friends" className="special-border-2 w-20vw h-35vh mobile:h-20vh mobile:w-40vw rounded-lg object-cover" /> */}
    </div>

    {/* Hebrew text above the pictures */}

    {/* Hebrew text and heart icon below the pictures */}
    <div className="flex flex-col items-center justify-center relative">
      {/* <button onClick={()=> router.push('/our-stories')} className="text-center text-headline-font-color text-lg p-4 font-medium mobile:bg-bgc-white bg-bgc-buttons  rounded-xl">לכל הזכרונות והסיפורים</button> */}
      {/* <Image src={benHeartHandwrite} alt='ben heart handwrite' className='mobile:hidden absolute -top-10vh left-8vw 1100px:left-23vw w-20vw h-20vh object-cover'/> */}
    </div>        
    </section>
  </div>
  )
}
