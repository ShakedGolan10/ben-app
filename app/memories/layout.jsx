import { MemoriesLayoutDynamic } from '@/components/dynamic_cmps/layouts_exports'
import React from 'react'

export default function MemoriesLayout({ children }) {
  return (
    <>
    <MemoriesLayoutDynamic children={children} />
    </>
  )
}
