'use client'
import React, { Key, useEffect } from 'react'
import Image from 'next/image'
import Potify from '@/public/potify.webp';
import { motion, AnimatePresence } from "framer-motion";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import AOS from 'aos';
import 'aos/dist/aos.css';

export type ProjectProps = {
    image: string | StaticImport ,
    name: string,
    github: string,
    live: string,
    stack: string,
    description: string

}

const SingleProject = (props: ProjectProps) => {
  useEffect(() => {
    AOS.init({duration: 500});
  }, [])
  
  return (
    <>
    <motion.div data-aos="flip-left" className='m-4 border border-t-0 border-solid border-slate-400 w-72 h-auto text-slate-400'>
      <div className='border-y border-solid border-slate-400'>
        <Image src={props.image} alt="try"/>
      </div>
      <div className='h-auto py-2 border-y border-solid border-slate-400'>
        <p  className='pl-2'>{props.stack}</p>
      </div>
      <div className=' border-y border-b-0 border-solid border-slate-400'>
        <h2  className='m-2 text-xl font-bold font-white'>{props.name}</h2>
        <p className='text-sm m-2'>{props.description}</p>
        <div className='flex gap-8 my-4'>
       <a href={props.github}> <button className='text-sm border-solid border border-slate-400 px-3 py-1 text-slate-400 ml-2 '>Github 🔱</button></a>
       <a href={props.live}> <button className='text-sm border-solid border border-slate-400 px-3 py-1 text-slate-400 ml-2 '>Live 🌍</button></a>
        </div>
      </div>

    </motion.div>
    </>

  )
}

export default SingleProject;