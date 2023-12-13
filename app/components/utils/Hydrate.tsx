'use client'
import {ReactNode, useEffect, useState} from 'react';
import Lottie from "lottie-react";
import Animate from '@/public/Animate.json'


export default function Hydrate({children}: {children: ReactNode}){
    const [isHydrated, setisHydrated] = useState(false)

    useEffect(() => {
      setisHydrated(true)

    }, [])
    
    return(
        <>
    {isHydrated ? <body className={`flex flex-col min-h-screen`}><div className={`flex-grow bg-[url('../public/mohammadreza.webp')] bg-cover bg-fixed w-full h-full bg-center  lg:bg-bottom relative`}>{children} </div></body> : <div className='h-96 w-96'><Lottie animationData={Animate}/></div>}
    </>
    )
}