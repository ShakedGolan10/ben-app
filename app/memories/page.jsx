'use client'
import BackgroundImage from '@/components/background-img'
import React from 'react'
import MemoPageHeroImg from '@/assets/imgs/memories-page-hero-img.png'
import HomePageHero from '@/components/home-page-hero'
import smileyByBen from '@/assets/imgs/smiley.png'
import Image from 'next/image'
import MemoriesSection from '@/components/memories-page/memories-section'
import { Button, useDisclosure } from '@nextui-org/react'
import AddStoryForm from '@/components/my-story-page/add-story-form'

export default function MemoriesPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure(); // for usage of modal ui 

  return (
  <>
    <BackgroundImage imgSrc={MemoPageHeroImg} adjustImageStyleTailwindString='min-h-20vh' />
    <HomePageHero subTitle='הסיפורים שלנו' 
    mainArticleAdjustmentTailwindString='h-max top-15vh mobile:top-10vh'
    subTitleAdjustmentTailwindString='mobile:text-md' />
   
    <article className='flex flex-col justify-center items-center gap-3vh'>
    <Button className={`font-bold max-w-fit max-h-fit'
       bg-bgc-nav-bar-upper text-center text-lg
        text-headline-font-color mobile:text-sm`} onPress={onOpen}>
        להוספת סיפור משותף
      </Button>
      <section className='flex flex-row justify-center items-center gap-5vw'>
        <h1 className="text-center text-headline-font-color font-bold text-4xl mobile:text-medium">אני לא משוגע אני נורמלי בסטנדרטים שלי</h1>
        <Image src={smileyByBen} className='h-[35px] w-[40px]' alt='smiley img'/>
      </section>
    </article>
    <MemoriesSection />
    <AddStoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
  </>
  )
}
