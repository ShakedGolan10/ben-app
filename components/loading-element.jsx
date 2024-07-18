// 'use client'
import { Spinner } from '@nextui-org/react'
import React from 'react'

export default function LoadingElement({ msg }) {
    return (
        <div className='bg-bgc-nav-bar-upper h-100vh w-100vw flex flex-col items-center justify-center full'>
        <Spinner size='lg' className='my-2 z-[300] ' />
        {
            msg && <p className='loading-text'>{msg}</p>
        }
        </div>
    )
}
