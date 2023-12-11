import React from 'react';
import Image from 'next/image'
import LinkedIn from '@/public/Linkedin.png'
import Github from '@/public/Github.png'
import Email from '@/public/Email.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div  className={`border-t border-solid border-slate-300 text-slate-300 text-xs px-5 py-4  bg-[url('../public/mohammadreza.webp')]`}>
       <div className='flex justify-between py-4'> 
        <p>Marvel.O</p>
        <p>marvel@cry8.io</p>
        <p className='text-lg'> Social</p>
       </div>

       <div className='flex justify-between py-8'> 
        <p>FullStack Sofware Engineer</p>
        <span className='flex'>
            <span className='h-6 w-6'>
            <Image src={Github} alt='github link'/>
            </span>
            <span className='h-6 w-6'>
            <Image src={LinkedIn} alt='linkedIn Link'/>
            </span>
            <span className='h-6 w-6'>
            <Image src={Email} alt='Email'/>
            </span>
        </span>
       </div>

       <div className='flex justify-center'> 
        <p className='text-slate-400 text-sm'>© Copyright 2023. Made By Marvel</p>
       </div>


    </div>
  )
}

export default Footer