'use client'
import { fetchService } from '@/services/fetch.service';
import React, { useEffect, useState } from 'react'
import ImgsGrid from '../imgs-grid';
import MemoryModal from './memory-modal';
import { Spinner, useDisclosure } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

export default function MemoriesGrid() {

  const [selectedMemory, setSelectedMemory] = useState(undefined);
  const [allMemories, setAllMemories] = useState([]);
  const [filter, setFilter] = useState('')
  
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  useEffect(() => {
    const getMemoriesData = async () => {
      let res = await fetchService.GET('getAllMemories')
      setAllMemories(res);
    };
    getMemoriesData();
  }, [])
  useEffect(() => {
    console.log('data:', allMemories)
  }, [allMemories])

  const handleSearch = async (ev) => {
    const { value } = ev.target
    setFilter(value)
  }

  const toggleMemory = async (memoryId) => {
    let memory = allMemories.find((memory)=> memory.id === memoryId)
    // if (!story) story = await fetchService.GET('getAllMemories') // for future use
    setSelectedMemory(memory)
    onOpen()
  }
  
  return (
    <>
    <div className='memories-section-heading flex flex-row justify-between mx-1'>
      <p className={`font-bold max-w-fit text-center text-2xl mobile:text-lg text-headline-font-color smMobile:text-medium`}>כל הסיפורים (לחץ על תמונה כדי לראות את הסיפור)</p>
      <div className='input-wrapper relative'>
        <input className='border-none p-1 min-w-20vw bg-app-blue rounded-lg' 
          type="text"
          onChange={handleSearch}
          placeholder="חיפוש..." />
          <FaSearch className='absolute top-[25%] right-[90%] smMobile:hidden' />
      </div>
    </div>
    {(allMemories.length) ? <ImgsGrid images={allMemories.filter((memory) => {
        if (memory.name) return memory.name.includes(filter)
      })} 
     numOfImagesPerRow={'3'} toggleMemory={toggleMemory}  /> : <Spinner className='my-10vh' />}
    <MemoryModal memory={selectedMemory} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  )
}