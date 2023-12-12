'use client'
import React, { useRef } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
// import Moh  from '@/public/mohammadreza.webp'

type Props = {}

const page = (props: Props) => {
 
  let {scrollY} = useScroll();

  let y = useTransform(scrollY, [0,1], ["0%", "100%"])

  return (
    <motion.div >
      <motion.div   className={`bg-[url('../public/mohammadreza.webp')] bg-no-repeat bg-cover`}>
      <Hero/>
      </motion.div>
      <Projects/>
   
      <Skills/>
     

     <motion.div className={`bg-[url('../public/mohammadreza.webp')] bg-no-repeat bg-cover`}>   
      <About/>
     
      <Contact/>
      </motion.div>
    </motion.div>
  )
}

export default page