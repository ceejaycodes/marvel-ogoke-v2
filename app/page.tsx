'use client'
import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
// import Moh  from '@/public/mohammadreza.webp'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={`bg-[url('../public/mohammadreza.webp')]`}>
      <Hero/>
      <div className={`bg-[url('../public/mohammadreza.webp')]`}>
      <Projects/>
      <Skills/>
      </div>
      <About/>
     
      <Contact/>
    </div>
  )
}

export default page