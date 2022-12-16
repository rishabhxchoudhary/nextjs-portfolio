import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition = {{duration: 1.5}}

    className='h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    
        <h3
        className=' top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
        >Skills</h3>
        <h3 
        className='top-36 uppercase tracking-[3px] text-gray-500 text-sm'
        >
            Hover over a skill for currency proficiency
        </h3>

        <div className="relative grid grid-cols-4 gap-5">

            <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            alt=""
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  90%
                </p>
              </div>
            </div>
          </motion.div>

            <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/520px-Scikit_learn_logo_small.svg.png?20180808062052"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  40%
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  40%
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  95%
                </p>
              </div>
            </div>
          </motion.div>

           
          <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png?20160530175649"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  80%
                </p>
              </div>
            </div>
          </motion.div>

            <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
            className="bg-white/50 rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  40%
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
            className="bg-white rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  80%
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>

             <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png?20210507000024"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png?20170401104355"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>

             <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333g"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  60%
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800"
            className="rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  60%
                </p>
              </div>
            </div>
          </motion.div>

            <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
            className="bg-white/90 rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  70%
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{
              x: -50,
              opacity:0
            }}
            whileInView={{opacity: 1, x:0}}
            transition = {{duration: 1.5}}
            className='group relative flex cursor-pointer'>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/520px-Django_logo.svg.png?20101010121142"
            className="bg-white/20 rounded-full border-gray-500 object-scale-down w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                  50%
                </p>
              </div>
            </div>
          </motion.div>

           

           

        </div>
    </motion.div>
  )
}

export default Skills;