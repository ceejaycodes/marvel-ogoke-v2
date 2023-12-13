import React from 'react'
import './globals.css'
import {  Space_Grotesk, Space_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import Nav from './components/Nav'
import Hydrate from './components/utils/Hydrate'
import Footer from './components/Footer'

type Props = {}

export const metadata: Metadata = {
  title: 'Marvel Ogoke',
  description: 'A portfolio of Marvel Ogoke',
}


const grotesk  = Space_Grotesk({weight: ['400', '500', '700'], subsets:['latin']})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body className={`${grotesk.className}`}>
        <Hydrate>
      <Nav/>

      {children}
      <Footer/>
      </Hydrate>
      </body>
    </html>
  )


};