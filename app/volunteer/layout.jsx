import { VolunteerLayoutDynamic } from '@/components/dynamic_cmps/layouts_exports'
import React from 'react'

export default function VolunteerLayout({ children }) {
  return (
    <>
    <VolunteerLayoutDynamic children={children} />
    </>
  )
}
