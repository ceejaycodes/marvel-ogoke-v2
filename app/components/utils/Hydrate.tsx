'use client'
import {ReactNode, useEffect, useState} from 'react';
import Lottie from "lottie-react";
import Animate from '@/public/Animate.json'
import backanim from '@/public/newback.json';


export default function Hydrate({children}: {children: ReactNode}){
    const [isHydrated, setisHydrated] = useState(false)

    useEffect(() => {
      setisHydrated(true)

    }, [])
    
    return(
        <>
    {isHydrated ? <div className={`flex flex-col min-h-screen`}><div className="bg-black w-full h-screen fixed bg-center bg-cover  lg:bg-bottom flex justify-center align-bottom"><Lottie className='opacity-30' animationData={backanim} /></div><div className={`flex-grow  w-full h-full  relative`}>{children} </div></div> : <div className='h-96 w-96 flex justify-center align-middle p-40'><Lottie animationData={Animate}/></div>}
    </>
    )
}