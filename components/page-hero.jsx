import Image from 'next/image'
import React from 'react'
export default function PageHero({title, subTitle, titleImgSrc, mainArticleAdjustmentTailwindString, adjustTitleTailwindString}) {

  return ((titleImgSrc) ? 
    <article className={`page-hero absolute ${mainArticleAdjustmentTailwindString}`}>
      <div className='hero-name-container'>
        <Image src={titleImgSrc} alt='hero-name' className='object-cover h-33vh mobile:h-27vh max-w-25vh'/>
      </div>
      <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color relative bottom-10vh 
      mobile:bottom-9vh mobile:right-4vw smMobile:hidden'>
        {subTitle}
      </p>
      </article>
 :
 <article className={`headlines flex flex-col gap-2vh absolute ${mainArticleAdjustmentTailwindString}`}>
 <h1 className={`text-center text-headline-font-color font-bold text-4xl ${adjustTitleTailwindString}`}>{title}</h1>
 <p className={`font-bold max-w-fit text-center text-2xl text-headline-font-color smMobile:hidden ${adjustTitleTailwindString}`}>
      {subTitle}
 </p>
</article>
 )
}
