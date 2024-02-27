'use client'
import React, { useRef } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Footer from './components/Footer'
// import Moh  from '@/public/mohammadreza.webp'

type Props = {}

const page = (props: Props) => {
 
  let {scrollY} = useScroll();

  let y = useTransform(scrollY, [0,1], ["0%", "100%"])

  return (
    <motion.div className=''>
      <motion.div   className={`pt-24 md:pt-48`}>
      <Hero/>
      </motion.div>
      <Projects/>
   
      <Skills/>
     

     <motion.div>   
      <About/>
     
      </motion.div>

      <div className='pt-40'>
      <Contact/>
      </div>
     
    </motion.div>
  )
}

export default page