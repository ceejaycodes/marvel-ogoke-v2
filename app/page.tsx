import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page