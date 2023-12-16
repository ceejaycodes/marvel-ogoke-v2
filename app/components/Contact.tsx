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

        <div className='flex my-18 py-10 flex-wrap text-slate-400 px-9 justify-evenly items-center bg-slate-800 bg-opacity-70'>
            <div className='lg:w-1/2 m-4'>
                <div className='h-40 w-80'> <Lottie animationData={Connect}/></div>
            </div>
            <div className=' my-18'>
            
          <a target='_blank' href='https://github.com/ceejaycodes'> <span className='flex gap-4 justify-center items-center '><Image className='h-12 w-12' src={Github} alt={'github'}/><h1 className='text-2xl'>Github</h1></span></a> 
          <a target='_blank' href='https://linkedin.com/in/marvel-ogoke'>  <span className='flex gap-4 justify-center items-center ml-5 '><Image className='h-10 w-10' src={LinkedIn} alt={'LinkedIn'}/><h1 className='text-2xl'>LinkedIn</h1></span></a> 
           <a target='_blank' href='mailto:dreelceejay79@yahoo.com'> <span className='flex gap-4 justify-center items-center mr-5 '><Image className='h-12 w-12' src={Email} alt={'mail'}/><h1 className='text-2xl'>Mail</h1></span></a> 
 
            </div>
        </div>
</div>
  )
}

export default Contact