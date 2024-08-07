'use client'
import { Spinner, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import BlogElement from './blog-element';


import CarouselCmp from '../carousel';
import { fetchService } from '@/services/fetch.service';
import BlogModal from './blog-modal';

export default function BlogSection() {

  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [blogData, setBlogData] = useState([])
  const [contetSelected, setContentSelected] = useState(undefined)
  
  const toggleModal = (id,idx) => {
    const contentIdx = blogData[idx].content.findIndex((data) => data.id === id )
    setContentSelected(blogData[idx].content[contentIdx])
    onOpen()
  }

  useEffect(() => {
    const getBlogData = async () => {
        let res = await fetchService.GET('getBlogData')
        // res = res.filter((t) => t.files)
        setBlogData(res);
      };
      getBlogData();
  },[])




  return (
    <>
    {(blogData.length) ? <section className='flex flex-col gap-5vh overflow-hidden p-5'>
      {blogData.map((data, idx) => {
        return (
        <BlogElement key={idx} toggleModal={toggleModal} data={data} idx={idx}/>
        ) 
      })}
    </section> : <Spinner className='my-10vh'/>}
      <BlogModal blogContent={contetSelected} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  )
}
