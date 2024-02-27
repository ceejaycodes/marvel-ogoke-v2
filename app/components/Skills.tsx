'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Headline from '@/public/headline.webp'
import Skill from '@/public/skills.json'
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllSkills = [
    {
        h1: 'Languages',
        stack: 'Python, JavaScript, Typescript, C'
    },
    {
        h1: 'Frameworks',
        stack: 'NextJS, ReactJS, Vite, Tailwind, Material UI, Django, Flask, NodeJS, Prisma'
    },
    {
        h1: 'Tools',
        stack: 'VS Code, Linux, Github, Figma,'
    },
    {
        h1: 'Databases',
        stack: 'SQLite3, MongoDB, PostgreSQL '
    },
    {
        h1: 'Other',
        stack: 'HTML5, CSS3, SCSS EJS, REST, Jinja'
    },
    
 
]

type Props = {}

type Skillprops = {
    h1:  string,
    stack: string
}

const Skills = (props: Props) => {
    useEffect(() => {
        AOS.init({duration: 500});
      }, [])
  return (
    <div className={`bg-backdark bg-opacity-50 bg-fixed`} id="skills">
    <motion.div   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className='flex my-18 pt-10  px-9 md:justify-around'>
        <motion.h1 className=' text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>Skills</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
            <Image  src={Headline} alt={'just another line'} />
        </motion.div>
    </motion.div>

    <div className='flex flex-col-reverse justify-center lg:flex-row px-9'> 
        {/* <div className='lg:w-1/2 h-96'>
            <Lottie animationData={Skill}/>

        </div> */}

        <div className='flex flex-col lg:flex-row flex-wrap justify-end  w-1/2'>
            
        {AllSkills && AllSkills.map((skillbox: Skillprops) => <motion.div key={skillbox.h1} data-aos="flip-up" className='m-4 border border-t-0 border-solid border-slate-400 w-64 h-auto text-slate-400 lg:w-48'>
    
      <div className='flex justify-left align-middleh-8 border-y border-solid border-slate-400'>
      <h6  className='p-2 text-lg font-semi-bold text-white'>{skillbox.h1}</h6>
      </div>
      <div className=' border-y border-b-0 border-solid border-slate-400 h-24'>
        
        <p className='text-sm m-2'>{skillbox.stack}</p>
      </div>

    </motion.div>)}
        </div>
    </div>

    </div>
  )
}

export default Skills;