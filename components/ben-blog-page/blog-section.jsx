'use client'
import { Spinner, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import BlogElement from './blog-element';
import volunteer from '@/assets/imgs/volunteer.jpeg'
import benShirt from '@/assets/imgs/ben-shirt.jpg'
import img3 from '@/assets/imgs/about-img.jpeg'
import img4 from '@/assets/imgs/ben-pic-1.png'
import img5 from '@/assets/imgs/example-img-1.jpeg'

import CarouselCmp from '../carousel';

export default function BlogSection() {

  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [blogData, setBlogData] = useState([])
  const [contetSelected, setContentSelected] = useState(undefined)
  
  const toggleModal = (title) => {
    const contentIdx = blogData.findIndex((data) => data.title === title)
    setContentSelected(blogData[contentIdx])
    onOpen()
  }

  useEffect(() => {
    const getBlogData = async () => {
        // let res = await fetchService.GET('getBlog')
        // res = res.filter((t) => t.files)
        setBlogData([{
        title: 'המתכונים של בן' ,
        content: [
          {
            contentTitle: 'פסטה ברוטב עגבניות',
            image: [benShirt.src], 
            text: 'paaaaaaa paaaaaaaaaaaaa paaaaaaaaaap apap appapapap p papa p p pppap p apa pa pappa kdopjs jn n sjfsjjjj j jjaj ap jk j jJAJSJAJ J J JASJJJJJ J J J J JJJJJJ'
          }
        ]
    },  
    {
      title: 'הבנות של בן' ,
      content: [
        {
          contentTitle: 'פסטה ברוטב עגבניות',
          image: [benShirt.src], 
          text: 'paaaaaaa paaaaaaaaaaaaa paaaaaaaaaap apap appapapap p papa p p pppap p apa pa pappa kdopjs jn n sjfsjjjj j jjaj ap jk j jJAJSJAJ J J JASJJJJJ J J J J JJJJJJ'
        }
      ]
  }
  ]);
      };
      getBlogData();
  },[])



  return (
    <>
    {(blogData.length) ? <section className='flex flex-col gap-5vh  overflow-hidden'>
      {blogData.map((data, idx) => {
        return (
        <BlogElement key={idx} toggleModal={toggleModal} data={data}/>
        ) 
      })}
    </section> : <Spinner className='my-10vh'/>}
        {/* <BlogModal blogContent={contetSelected} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} /> */}
    </>
  )
}
