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
    {isHydrated ? <body className={`flex flex-col min-h-screen`}><div className="bg-[url('../public/mohammadreza.webp')] w-full h-full fixed bg-center bg-cover  lg:bg-bottom"></div><div className={`flex-grow  w-full h-full  relative`}>{children} </div></body> : <div className='h-96 w-96'><Lottie animationData={Animate}/></div>}
    </>
    )
}