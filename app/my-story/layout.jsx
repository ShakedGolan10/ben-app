import { MyStoryLayoutDynamic } from '@/components/dynamic_cmps/layouts_exports'
import React from 'react'

export default function MyStoryLayout({ children }) {
  return (
    <>
    <MyStoryLayoutDynamic children={children} />
    </>
  )
}
