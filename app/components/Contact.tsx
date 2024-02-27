'use client'

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Lottie from 'lottie-react'
import Headline from '@/public/headline.webp';
import Connect from '@/public/realcon.json'
import LinkedIn from '@/public/Linkedin.png'
import Github from '@/public/Github.png'
import Email from '@/public/Email.png'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact">
           <motion.div className='flex my-18 py-10  px-9 md:justify-around'>
            <motion.h1 className=' text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>Connect</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
            <Image  src={Headline} alt={'just another line'} />
        </motion.div>
        </motion.div>

        <div className='flex flex-wrap text-slate-400 justify-evenly items-end  bg-black'>
        {/* <div className='h-full w-full opacity-30'> <Lottie animationData={Connect}/></div> */}
           
            <div className=' bg-slate-800 bg-opacity-70 p-8 mt-16  lg:m-8 rounded-2xl    h-auto w-full '>
            <div className='ml-24'> <h1 className='md:text-2xl'>You can find me here ␥ </h1></div>
            <div className='flex flex-row gap-10 lg:gap-20 pt-7  p-6'>
          <a target='_blank' href='https://github.com/ceejaycodes'> <span className='flex lg:gap-4 justify-center items-center '><Image className='lg:h-12 lg:w-12' src={Github} alt={'github'}/><h1 className='lg:text-2xl'>Github</h1></span></a> 
          <a target='_blank' href='https://linkedin.com/in/marvel-ogoke'>  <span className='flex lg:gap-4 justify-center items-center ml-5 '><Image className='lg:h-10 lg:w-10' src={LinkedIn} alt={'LinkedIn'}/><h1 className='lg:text-2xl'>LinkedIn</h1></span></a> 
           <a target='_blank' href='mailto:dreelceejay79@yahoo.com'> <span className='flex lg:gap-4 justify-center items-center mr-5 '><Image className='lg:h-12 lg:w-12' src={Email} alt={'mail'}/><h1 className='lg:text-2xl'>Mail</h1></span></a> 
           </div>
            </div>
        </div>
</div>
  )
}

export default Contact