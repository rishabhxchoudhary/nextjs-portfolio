import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCirlcles from './BackgroundCirlcles'
import rk from '../images/RK.jpg'
import Image from 'next/image'
import Link  from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words : [
            "Rishabh",
            "working at xLance",
            "member of GDSC NSUT",
            "turning my coffee to code"
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCirlcles/>
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={rk} alt="adjb"/>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>Hi, I am {text}</span><Cursor cursorColor='#F7AB0A'/>
        </h1>
        {/* <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}