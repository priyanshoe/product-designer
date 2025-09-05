'use client'
import gsap from "gsap";
import { useEffect, useRef, useState } from "react"

export default function Customloading() {

    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const loadingBar = useRef(null)

    // useEffect(()=>{
    //     animation();
    // },[])
    
    // const animation = () => {
        
    //     gsap.to(loadingBar.current,{
    //         width:'100%',
    //         duration:2,
    //     })
    // }



    const count = () => {
        setProgress(progress+2.5)
    }

    const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.15, 100));
        
    }, 100);
    
    setTimeout(() => {
        setLoading(false)
        clearInterval(interval)
    }, 1500);
    


    return (
        <div className={`absolute top-0 left-0 z-999 w-full h-screen ${loading ? 'translate-y-0' : 'translate-y-[-100%]'} transitionNav bg-[var(--secondary-color)] text-white
                         flex justify-center items-center `}>
            <div className="flex items-center justify-center gap-3">
                <h3>Cynthia Ugwu</h3>
                <div className="loadingBarContainer h-1 w-30 border-1 border-[var(--secondary-text-color)]">
                    <div 
                    ref={loadingBar}
                    className='bg-white w-0 h-full'
                        style={{width : `${progress}%`}}
                    ></div>
                </div>
                <h3>{Math.floor(progress)}%</h3>

            </div>
        </div>
    )
}