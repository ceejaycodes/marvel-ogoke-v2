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
    {isHydrated ? <div className={`bg-[url('../public/mohammadreza.webp')] bg-top bg-cover bg-fixed w-full h-full`}>{children}</div> : <div className='h-96 w-96'><Lottie animationData={Animate}/></div>}
    </>
    )
}