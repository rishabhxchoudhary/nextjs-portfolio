import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView={{opacity: 1}}
    transition = {{duration: 1.5}}
    className="h-screen flex-col flex relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{
          opacity: 0,
          x:-200
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{x:0, opacity:1}}
        viewport={{once: true}}
        src="https://raw.githubusercontent.com/rishabhxchoudhary/portfolio/main/images/Me.png"
        alt=""
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-xl font-semibold'>
          Here is a <span className='underline decoration-[#f7ab0a]'>little</span> background about me
          </h4>
          <p className='text-base'>
          Hello,<br></br>
          I am Rishabh. I am a student at NSUT Dwarka.<br></br>
          I do competitive programming and web development.<br></br>
          I am a member of xLance and GDSC society. <br />
          I am also a fluatist. I make song covers in my free time.
          </p>
        </div>
    </motion.div>
  )
}