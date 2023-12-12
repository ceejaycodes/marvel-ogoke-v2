'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import Close from '@/public/close.png'
import Open from '@/public/open.png'
import Line from '@/public/line.png'
import LinkedIn from '@/public/Linkedin.png'
import Github from '@/public/Github.png'
import Email from '@/public/Email.png'
import LogoRem from '@/public/Logo-1.json'
import Lottie from 'lottie-react'



type Props = {}


const Nav = (props: Props) => {


    const [open, setopen] = useState(false)
    const handleToggle = ()=>{
        setopen(!open)
    }

  return (
    <div className={`fixed top-0 left-0 right-0 bg-[url('../public/mohammadreza.webp')] z-50 h-20`}>
        
        <div className='mx-3 flex justify-between mt-5 pb-8'>
       <div className='flex'>
       <motion.span className='hidden lg:flex absolute mx-5  flex-col'>
        
            <Image  src={Line} alt='standin'/>
        <div className='-ml-3'>
            <a target='_blank' href='https://linkedin.com/in/marvel-ogoke'><Image className='h-6 w-6 ' src={LinkedIn} alt='linkedIn Link'/></a>
            <a target='_blank' href='https://github.com/ceejaycodes'><Image className='h-6 w-6 my-2' src={Github} alt='Github Link'/></a>
           <a target='_blank' href='mailto:dreelceejay79@yahoo.com'><Image className='h-6 w-6' src={Email} alt='Email Link'/></a>
        </div>
        </motion.span>
        <a href='/'>
        <motion.span className='flex h-12 lg:pl-8 lg:h-20'>
            <Lottie animationData={LogoRem} loop={false}  />
            </motion.span>
            </a>
        </div>
            <motion.div className='cursor-pointer md:hidden' 
            
            
            whileTap={{  scale: [0.7, 1, 0.7, 1, 1] }}  
            onClick={handleToggle}>
            <Image className='mt-1 h-6 w-7' src={open ? Close : Open} alt='hamburger closed' width={45} height={45}/> 
            </motion.div>
            <div className='hidden md:block'>
                <ul className=' flex  gap-8 mr-12 text-gray-400'>
                    <motion.li whileHover={{opacity: 0.5, skewY: -15, scale: 1.2, transition: {duration: 0.5}}}><a href='#about' className=' hover:text-gray-200 flex gap-1'><p className='text-purple-500 font-bold'>#</p>About Me</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5, skewY: 15, scale: 1.2, transition: {duration: 0.5}}}><a href='#skills' className='flex gap-1'><p className='text-purple-500 font-bold'>#</p>Skills</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5, skewY: -15, scale: 1.2, transition: {duration: 0.5}}}><a href='#projects' className='flex gap-1'><p className='text-purple-500 font-bold'>#</p>Projects</a></motion.li>
                    <motion.li whileHover={{opacity: 0.5, skewY: 15, scale: 1.2, transition: {duration: 0.5}}}><a href='#contact' className='flex gap-1'><p className='text-purple-500 font-bold'>#</p>Connect</a></motion.li>
                </ul>
            </div>
        </div>
       { open && 
       <AnimatePresence> 
        <motion.div  initial={{ opacity: 0, scale: 0.5, x: -350 }} 
    animate={{ opacity: 1, scale: 1, x:0 }}
     exit={{opacity: 0, x: -120}}
    transition={{ duration: 0.5}} 
    layout onClick={()=>setopen(false)} 
    className='absolute w-screen h-screen bg-[url("../public/mohammadreza.webp")] text-3xl md:hidden  text-gray-300  z-10  justify-center pt-24 -mt-8 '>

            <motion.ul initial={{scale: 0.5, opacity:0.5}} animate={{ opacity: 1, scale: 1 }} className='flex flex-col gap-16 w-21 justify-center px-20 ' >

            
                <motion.li
                 initial={{ scale: 0, x:400}} animate={{scale: 1, x:0}} transition={{type:"spring",duration: .6}} exit={{  x:-100}}
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} >
                    <a href='#about' className='hover:text-gray-200 flex gap-1'><p className='text-purple-500 font-bold'>#</p>
                        About Me</a>
                </motion.li>

                <motion.li 
                initial={{ scale: 0,x:300}} animate={{scale: 1, x:0}} transition={{duration: .8}} exit={{  x:100}}
                whileHover={{ scale: 1.2, transition: {duration: 0.2}}} whileTap={{ scale: 1.1 }} >
                   <a href='#skills' className='hover:text-gray-200 flex gap-1'><p className='text-purple-500 font-bold'>#</p>
                        Skills</a>
                </motion.li>
                <motion.li 
                 initial={{ scale: 0, x:400}} animate={{scale: 1, x: 0}} transition={{duration: 1}} exit={{  x:200}}
                whileHover={{ scale: 1.2, transition: {duration: 0.2} }} whileTap={{ scale: 1.1 }}>
                    <a href='#projects' className='hover:text-gray-200 flex gap-1'><p className='text-purple-500 font-bold'>#</p>
                        Projects</a>
                </motion.li>
                <motion.li
                 initial={{ scale: 0, x:400}} animate={{scale: 1, x:0}} transition={{duration:1.3}} exit={{  x:100}}
                whileHover={{ scale: 1.2, transition: {duration: 0.2} }} whileTap={{ scale: 1.1 }}>
                   <a href='#contact' className='hover:text-gray-200 flex gap-1'><p className='text-purple-500 font-bold'>#</p>
                        Connect</a>
                </motion.li>

                
            </motion.ul>
            <div className='flex gap-7 justify-center mt-20'>
            <motion.a initial={{scale:0, opacity: 0, y: 300}} animate={{scale:1, opacity:1,y: 0}} transition={{type:"spring",duration: 1.2}} target='_blank' href='https://linkedin.com/in/marvel-ogoke'><Image className='w-12' src={LinkedIn} alt='linkedIn Link' height={400} width={400}/></motion.a>
            <motion.a initial={{scale:0, opacity: 0, y: 400}} animate={{scale:1, opacity:1,y: 0}} transition={{type:"spring",duration: 1.7}} target='_blank' href='https://github.com/ceejaycodes'><Image className='w-12' src={Github} alt='Github Link'  height={400} width={400}/></motion.a>
            <motion.a initial={{scale:0, opacity: 0, y: 500}} animate={{scale:1, opacity:1,y: 0}} transition={{type:"spring",duration: 2.1}} target='_blank' href='mailto:dreelceejay79@yahoo.com'><Image className='w-12' src={Email} alt='Email Link'  height={400} width={400}/></motion.a>
        </div>
        </motion.div>
        </AnimatePresence>
        }
    </div>
  )
}

export default Nav