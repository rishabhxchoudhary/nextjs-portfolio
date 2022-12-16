import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link  from 'next/link'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 flex itms-start justify-between max-w-7xl z-20 mx-auto xl:items-center">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center">
            <SocialIcon url="https://www.linkedin.com/in/rishabhxchoudhary/"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://www.instagram.com/rishabhxchoudhary/?hl=en"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://www.youtube.com/channel/UCE2QA61gwcrqUbINkwyrz4g"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://github.com/rishabhxchoudhary"
            fgColor='gray'
            bgColor='transparent'
            />

        </motion.div>
        <Link href='#contact'>
        
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In touch</p>
        </motion.div>
        </Link>
    </header>
  )
}