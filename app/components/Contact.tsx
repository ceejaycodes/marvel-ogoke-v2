'use client'

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Headline from '@/public/headline.webp'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact">
           <motion.div className='flex my-18 pt-10  px-9 md:justify-around'>
            <motion.h1 className=' text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>Connect</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
            <Image  src={Headline} alt={'just another line'} />
        </motion.div>
        </motion.div>

        <div className='flex my-18 py-10 flex-wrap text-slate-400 px-9 justify-evenly items-center bg-slate-800 bg-opacity-70'>
            <div className='lg:w-1/2 m-4'>
                <p></p>
            </div>
            <div className=' my-18 py-10'>
            <motion.div className='m-4 border border-t-0 border-solid border-slate-400 w-64 h-auto text-slate-400 lg:w-48'>
    
    <div className='flex justify-left align-middle h-8 border-y border-solid border-slate-400'>
    <h6  className='p-2 text-lg font-semi-bold text-white'>Reach Me Here</h6>
    </div>
    <div className=' border-y border-b-0 border-solid border-slate-400 h-24'>
      
      <p className='text-sm m-2'>📩 dreelceejay79@yahoo.com</p>
      <p className='text-sm m-2'></p>
    </div>

  </motion.div>
 
            </div>
        </div>
</div>
  )
}

export default Contact