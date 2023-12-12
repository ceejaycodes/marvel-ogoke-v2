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

        <div className='flex my-18 py-10 flex-wrap text-slate-400 px-9 justify-evenly items-center bg-slate-800 bg-opacity-70 m-8 rounded-2xl'>
            <div className='lg:w-1/2 m-4'>
                <p>
                Welcome to my digital abode, where lines of code converge to craft innovative solutions and bring ideas to life.<br></br> 
                I am Marvel Ogoke, a dedicated software engineer with a passion for creating elegant and efficient software systems.
                With a foundation built on a robust blend of theoretical knowledge and practical experience, I thrive on transforming complex problems into streamlined, user-centric solutions.

                <br></br> <strong>Professional Journey:</strong><br></br>
My journey in the realm of software engineering has been marked by a commitment to continuous learning and a relentless pursuit of excellence. Leveraging a diverse skill set that spans front-end and back-end development, I have had the privilege of contributing to a variety of projects, from scalable web applications to intricate software architectures.

<br></br><strong>Hobbies:</strong><br></br>
Beyond the realm of coding, my life is enriched by a symphony of interests. As a pianist, I find solace and inspiration in the nuanced language of music, transcending the boundaries of technology to connect with the soul.
 <br></br>Poetry serves as another expressive outlet, allowing me to distill complex emotions and experiences into the elegance of language.
 <br></br>In the digital tapestry of my life, curating playlists is an art form that brings joy and rhythm. Much like crafting code, selecting the right combination of melodies requires a keen sense of harmony and an understanding of the audience's needs.
 <br></br><strong>Philosophy:</strong><br></br>
My approach to software engineering is grounded in the philosophy that technology should serve as an enabler, simplifying lives and fostering meaningful connections. This ethos extends beyond the screen, guiding my creative pursuits in music and poetry.
<br></br>As you navigate through this digital space, I invite you to explore the intersections of my professional endeavors and personal passions. Together, let's embark on a journey where technology meets artistry, and where every line of code is infused with both precision and poetry. Welcome to the harmonious convergence of logic and creativity.
                </p>
                   
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