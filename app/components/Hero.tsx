'use client'
import React, { useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';
import Lottie from 'lottie-react'
import Avi from '@/public/avi.webp';
import Dots from '@/public/Dots.webp';
import Loading from '@/public/loading.json'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const Hero = (props: Props) => {

  
  return (
    <motion.div  className='md:flex justify-between'>
    <motion.div   className='lg:pl-12 ml-11'>
        <motion.h1  initial={{scale: 0.2, y: 700}}  animate={{scale:1, y: 0}} transition={{type:"spring", duration: 1}}  className='text-7xl font-black lg:tracking-wider drop-shadow-2xl text-white'>
            Marvel Is <br></br> A <motion.h1 initial={{scale: 0, y: 500}}  animate={{scale:1, y: 0}} transition={{type:"spring",duration: 3}} className='text-purple-500 drop-shadow-2xl'>Full</motion.h1> Stack <motion.h1 initial={{scale: 0, y: 100}}  animate={{scale:1, y: 0}} transition={{duration: 2}} className='text-purple-500'>Software</motion.h1> Engineer
        </motion.h1>
        <div className='py-8 text-gray-300'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Building For Tomorrow, One Line Of Code at a Time',
        1700, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={80}
    />
    </div>
        <div>
        <a target='_blank' href='https://www.dropbox.com/scl/fi/9ue1lhypq41vxc49foq8w/Marvel-Ogoke-CV.pdf?rlkey=p9sm1twwrb421hzclxfvxigvn&dl=0'> 
          <motion.button initial={{opacity: 0.1, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration:1}} whileHover={{opacity: 0.8, scale: 1.1, transition:{duration: 0.2}}} className='flex rounded-lg bg-white p-2 border-purple-500 text-black'>
            <motion.h3>View Resumé</motion.h3>
            <motion.span className='h-9 w-9 -mt-3 mx-3'>
            <Lottie animationData={Loading}/>
            </motion.span>
          </motion.button>
          </a>
        </div>

        </motion.div>

      <motion.div className='flex flex-col lg:flex-row-reverse '>
          <motion.div   animate={{
          scale: [0, 1],
          opacity: [0,1],
          y:[250,0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          type:"spring",
          duration: 3
          
        }}
        className='p-7'>
          <Image src={Avi} alt='Marvel Ogoke'  className='opacity-75 drop-shadow-2xl rounded-full' />
          </motion.div>

          <motion.div className='ml-72 -mt-32 lg:absolute bottom-60 right-12 opacity-40'>
            <Image src={Dots} alt='literally dots'/>
          </motion.div>
        </motion.div>
        
        </motion.div>
  )
}

export default Hero;