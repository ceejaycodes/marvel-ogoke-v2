'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Headline from '@/public/headline.webp'
import { motion, AnimatePresence } from "framer-motion"
import SingleProject from './SingleProject';
import { ProjectProps } from './SingleProject'
import Potify from '@/public/potify.webp'
import Marvel from '@/public/MarvelOgoke.webp'
import Dusky from '@/public/dusky.webp'
import Social from '@/public/social.208d669b69ad54f96d39.webp'
import Mail from '@/public/social.208d669b69ad54f96d39.webp'
import Marvel1 from '@/public/Marvel1.webp'
import Commerce from '@/public/commerce.dc14299386a002242db8.webp'
import Interiorize from '@/public/interiorize.webp'
import  SamGreen from '@/public/SamGreen.webp'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';


type Props = {}

const disPlayProj = [
    {
        image: Potify,
        name: "Potify",
        github: "https://github.com/ceejaycodes/Potify",
        live: "https://potify-seven.vercel.app/",
        stack: "NextJs, Prisma, Google Auth",
        description: "An Online Herb Dispensary built with Stripe! "

    },
    {
        image: Dusky,
        name: "Dashboard UI",
        github: "https://github.com/ceejaycodes/dashboard-UI",
        live: "https://dashboard-ui-dusky-mu.vercel.app/",
        stack: "NextJS Material UI, SCSS ",
        description: "A Mock Dashboard for a Fintech Company"

    },
    {
        image: Marvel,
        name: "Marvel Ogoke",
        github: "",
        live: "",
        stack: "NextJs, TailwindCSS, Zustand",
        description: "A Portfolio Website for Marvel Ogoke"

    },
    {
        image: Social,
        name: "Social Media",
        github: "https://github.com/ceejaycodes/Social-Media",
        live: "http://marvelsocial.cry8.io/",
        stack: "Python, Django, Javascript, SCSS ",
        description: "A Social Media App Built wuth django and Javascript"

    },
    {
        image: Mail,
        name: "Mail",
        github: "",
        live: "",
        stack: "",
        description: ""

    },
    {
        image: Marvel1,
        name: "Marvel Ogoke",
        github: "",
        live: "",
        stack:"",
        description: ""

    },
    {
        image: Commerce,
        name: "Commerce",
        github: "",
        live: "",
        stack: "",
        description: ""

    },
    {
        image: Interiorize,
        name: "Interiorize",
        github: "",
        live: "",
        stack: "",
        description: ""

    },
    {
        image: SamGreen,
        name: "finance 50",
        github: "",
        live: "",
        stack: "",
        description: ""

    },
   
]

const Projects = (props: Props) => {

   
  return (
    <div id='projects'>
    <motion.div className='flex my-18 pt-10 px-9 md:justify-around'>
        <motion.h1 className=' text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>Projects</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
        <Image  src={Headline} alt={'just another line'} />
    </motion.div>
       <Link href={'/projects'}> <p className='mt-3 mx-1 text-xs text-white'>View More </p></Link>
    </motion.div>

    <div className='flex flex-wrap mx-6 justify-evenly ' >
    
    {disPlayProj && disPlayProj.map((project: ProjectProps )=> { return <SingleProject key={project.name} name={project.name} github={project.github} live={project.live} description={project.description} image={project.image} stack={project.stack}/>}).slice(0,3)}
    </div>
    
    </div>
  )
}

export default Projects;