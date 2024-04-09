'use client'
import { fetchService } from '@/services/fetch.service';
import React, { useEffect, useState } from 'react'
import ImgsGrid from './imgs-grid';
import MemoryModal from './memory-modal';
import { useDisclosure } from '@nextui-org/react';

export default function MemoriesGrid() {

  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [selectedMemory, setSelectedMemory] = useState(undefined);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchService.GET('getAllMemories')
      setMemories(res);
    };
    
    getData();
  }, []);

  const toggleMemory = async (memoryId) => {
    let memory = memories.find((memory)=> memory.id === memoryId)
    // if (!story) story = await fetchService.GET('getAllMemories') // for future use
    setSelectedMemory(memory)
    onOpen()
  }
  
  return (
    <>
    {memories && <ImgsGrid images={memories} numOfImagesPerRow={3} toggleMemory={toggleMemory}  />}
    <MemoryModal memory={selectedMemory} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </>
  )
}

// and also an array of objects that looks like that {id text name date ,
// headline files} in the files there is an array of images src