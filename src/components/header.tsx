import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import AnimatedLink from './animatedLink'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-10vh bg-gray-800 flex items-center justify-start p-4 header">
        <AnimatedLink
            href='/'
        >
            <Image 
                src={logo}
                alt="halitto logo"
                height={50}   
            />
        </AnimatedLink>
    </div>
  )
}
