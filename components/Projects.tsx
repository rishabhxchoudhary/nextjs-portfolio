import React from 'react'
import Image from 'next/image'
import carefi from '../images/CareFi.png'
import taskdiary from '../images/TaskDiary.png'
import tele from '../images/TelegramBot.png'
import wallewaste from '../images/Wallewaste.png'
import { motion } from "framer-motion"
type Props = {}

function Projects({}: Props) {

  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5
    }}
    >
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x  snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/80'>
            {/* Each of my projects */}
            {/* {projects.map((project,i)=> ( */}
                <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '
                >
                    <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        viewport = {{once: true}}
                    >
                        <Image
                        src={carefi}
                        width={500}
                        alt=""
                        // className='w-[666px] h-[375px]'
                        />
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Project 1 of 4 :</span><br></br>
                            CareFi - Women Health Care Website</h4>
                    </div>
                    <p className='text-lg text-center md:text-left'>
                        A women safety website build using HTML, CSS, JS, Bootstrap and GSAP.
                    </p>
                </div>
                <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '
                >
                    <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        viewport = {{once: true}}
                    >
                        <Image
                        src={taskdiary}
                        width={500}
                        alt=""
                        // className='w-[666px] h-[375px]'
                        />
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Project 2 of 4 :</span><br></br>
                            Task Diary App</h4>
                    </div>
                    <p className='text-lg text-center md:text-left'>
                        A simple app to keep track of daily tasks. Made using React and Firebase.
                    </p>
                </div>

                <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '
                >
                    <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        viewport = {{once: true}}
                    >
                        <Image
                        src={wallewaste}
                        width={500}
                        alt=""
                        // className='w-[666px] h-[375px]'
                        />
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Project 3 of 4 :</span><br></br>
                            Wall-E-Waste</h4>
                    </div>
                    <p className='text-lg text-center md:text-left'>
                        A waste management app for smart cities. Made using HTML, CSS, JS, Node and MongoDb.
                    </p>
                </div>
                <div
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '
                >
                    <motion.div
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        viewport = {{once: true}}
                    >
                        <Image
                        src={tele}
                        width={500}
                        alt=""
                        // className='w-[666px] h-[375px]'
                        />
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'> 
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Project 4 of 4 :</span><br></br>
                            Python Telegram Bot</h4>
                    </div>
                    <p className='text-lg text-center md:text-left'>
                       A meme bot and pdf converter made using python.
                    </p>
                </div>
            {/* ))} */}

        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects