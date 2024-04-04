'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Image from 'next/image'
import React, {  } from 'react'
import { FaSmileBeam } from 'react-icons/fa'


const AddStoryForm = ({ isOpen, onOpenChange }) => (
  <Modal
    backdrop='opaque'
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
      }}
    className='max-w-75vw h-75vh'
  >
 <ModalContent>
          {(onClose) => (
            <>
            <ModalBody>
                <div className='h-full w-full'>
                    <iframe
                    // dir='rtl'
                    // onLoad={}
                    className="airtable-embed"
                    src="https://airtable.com/embed/appJ2qsAVwaRQvqWW/pagGcSMDLIMkzoX5S/form"
                    onWheel={() => {}}
                    height='100%'
                    width='100%'
                    style={{ background: "transparent"}}
                />
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
  </Modal>
);
export default function HomePageHero({subTitle, titleImgSrc, absoluteAdjustmentTailwindString}) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <article className={`page-hero absolute flex flex-col h-80vh ${absoluteAdjustmentTailwindString}`}>
      <div className='hero-name-container'>
        <Image src={titleImgSrc} alt='hero-name' className='object-cover h-33vh mobile:h-27vh max-w-25vh'/>
      </div>
      <p className='font-bold max-w-fit text-center text-4xl mobile:text-2xl text-headline-font-color relative bottom-10vh 
      mobile:bottom-9vh mobile:right-4vw smMobile:hidden'>
        {subTitle}
      </p>
      <Button className='font-bold -top-8vh mobile:right-4vw 900px:top-[23%] max-w-fit bg-bgc-nav-bar-upper text-center text-lg text-headline-font-color p-[8%] mobile:self-end' onPress={onOpen}>להוספת סיפור משותף</Button>
      <AddStoryForm isOpen={isOpen} onOpenChange={onOpenChange} />
      </article>
 )
}
