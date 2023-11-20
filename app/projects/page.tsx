'use client'
import React from 'react'
import Image from 'next/image'
import Headline from '@/public/headline.webp'
import { motion, AnimatePresence } from "framer-motion"
import SingleProject from '../components/SingleProject'
import { ProjectProps } from '../components/SingleProject'
import Potify from '@/public/potify.webp'
import Marvel from '@/public/MarvelOgoke.webp'
import Dusky from '@/public/dusky.webp'
import Social from '@/public/social.208d669b69ad54f96d39.webp'
import Mail from '@/public/mail.d72d3b44dfc82b196459.webp'
import Marvel1 from '@/public/Marvel1.webp'
import Commerce from '@/public/commerce.dc14299386a002242db8.webp'
import Interiorize from '@/public/interiorize.webp'
import  SamGreen from '@/public/SamGreen.webp'


type Props = {}

const disPlayProj = [
    {
        image: Potify,
        name: "Potify",
        github: "https://github.com/ceejaycodes/Potify",
        live: "https://potify-seven.vercel.app/",
        stack: "NextJs, Prisma, TailwindCSS, Google Auth",
        description: "An Online Herb Dispensary built with Stripe! "

    },
    {
        image: Dusky,
        name: "Dashboard UI",
        github: "https://github.com/ceejaycodes/dashboard-UI",
        live: "https://dashboard-ui-dusky-mu.vercel.app/",
        stack: "Vite Material UI, SCSS ",
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
        github: "https://github.com/ceejaycodes/Interiorize",
        live: "https://youtu.be/iM7rvjiRRGA",
        stack: "Python, Flask, Vanilla Javascript",
        description: "This is a flask app that uses GeoApify APIs to enable users look for furniture stores around their location. Below are some of the routes implemented."

    },
    {
        image: SamGreen,
        name: "SamGreen  Tips",
        github: "https://github.com/samgreentipsv2",
        live: "https://github.com/samgreentipsv2",
        stack: "Python, DRF, Vite React, Material UI",
        description: "A Sports Prediction Website that built with user auth and subsription management"

    },
   
]

const Projects = (props: Props) => {
  return (
    <div>
    <motion.div initial={{opacity: 0, scale: 0.5}} 
    animate={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='flex my-36  px-9 md:justify-around'>
        <motion.h1 className='ml-3 text-4xl text-white font-bold'><motion.span className=' mx-1 text-4xl text-purple-500 font-bold'>#</motion.span>Projects</motion.h1>
        <motion.div className='mt-5 mx-2 w-24 md:w-full'>
        <Image  src={Headline} alt={'just another line'} />
        </motion.div>
    </motion.div>

    <div className='flex flex-wrap mx-6 justify-evenly'>
    
    {disPlayProj && disPlayProj.map((project: ProjectProps )=> { return <SingleProject key={project.name} name={project.name} github={project.github} live={project.live} description={project.description} image={project.image} stack={project.stack}/>})}
    </div>
    
    </div>
  )
}

export default Projects;