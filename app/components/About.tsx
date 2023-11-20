'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Headline from '@/public/headline.webp'
import Avi from '@/public/logoAi.webp'

type Props = {}

const About = (props: Props) => {
  return (
    <div id="about">
        <motion.div className='flex my-18 pt-10  px-9 md:justify-around'>
            <motion.h1 className=' text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>About</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
            <Image  src={Headline} alt={'just another line'} />
        </motion.div>
        </motion.div>

        <div className='flex my-18 py-10 flex-wrap text-slate-400 px-9 justify-evenly items-center'>
            <div className='lg:w-1/2 m-4'>
                <p>
                    « Technology is humanity’s most potent tool in her quest for survival and all round evolution. I am a software developer who believes he can use his skills to make an enormous impact.
                    «« Although I appreciate the importance of Javascript and frontend technology, I am heavily interested in exploring the potential of Python and its backend frameworks to build scalable applications and software.
                    «« I find nature fascinating and also enjoy a wide range of alternative music. In my spare time, I like to scribble my thoughts into words - it also makes for good poetry.
                    «« I like to think that I possess problem solving skills that will benefit any organisation regardless of its scale. I appreciate good work ethic and positive spirited people.
                    «« Looking forward to working on your projects or simply connecting over a cup of coffee.</p>
            </div>
            <div className=' my-18 py-10'>
                <AnimatePresence>               
                    <motion.div initial={{y: 15}} animate={{y: -15}} exit={{y:15}} transition={{duration: 5, repeat: Infinity}} >
                    <Image  src={Avi} alt='Marvel Ogoke' height={250} width={300} className='opacity-50 drop-shadow-2xl rounded-full'/>
                </motion.div>
                </AnimatePresence>
 
            </div>
        </div>
    </div>
  )
}

export default About