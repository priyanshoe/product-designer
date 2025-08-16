'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ImageData = [
    { id: 1, name: 'AVIS', imgSrc: '/SVG/AVIS.svg' },
    { id: 2, name: 'Baron', imgSrc: '/SVG/Baron.svg' },
    { id: 3, name: 'Clover', imgSrc: '/SVG/Clover.svg' },
    { id: 4, name: 'Comcast', imgSrc: '/SVG/Comcast.svg' },
    { id: 5, name: 'ETS', imgSrc: '/SVG/ETS.svg' },
    { id: 6, name: 'Expedia', imgSrc: '/SVG/Expedia.svg' },
    { id: 7, name: 'Identity', imgSrc: '/SVG/Identity.svg' },
    { id: 8, name: 'Lucid', imgSrc: '/SVG/Lucid.svg' },
    { id: 9, name: 'Microsoft', imgSrc: '/SVG/Microsoft.svg' },
    { id: 10, name: 'NEOM', imgSrc: '/SVG/NEOM.svg' },
    { id: 11, name: 'NFL', imgSrc: '/SVG/NFL.svg' },
    { id: 12, name: 'Toefl', imgSrc: '/SVG/Toefl.svg' },
    { id: 13, name: 'Under_armour', imgSrc: '/SVG/Under_armour.svg' },
    { id: 14, name: 'Zappos', imgSrc: '/SVG/Zappos.svg' },
];




export default function Strip() {
    
    const stripe1 = useRef(null)
    const stripe2 = useRef(null)
    useEffect(() =>{
        animation()

    },[])

    const animation = () => {

        gsap.to(stripe1.current, {
            x:'-100%',
            duration: 18,
            repeat: -1,
            ease: 'linear',
        })
        gsap.to(stripe2.current, {
            x:'-100%',
            duration: 18,
            repeat: -1,
            ease: 'linear',
        })
    }
    return (
        <div className="stripe_container absolute top-0 left-0 border-[#9c9c9c] border-y-1 ">
            <div className="stripe_slider relative flex whitespace-nowrap py-8 md:py-4 lg:py-2 ">
                <div ref={stripe1} className="flex gap-28 md:gap-54 ">
                    {ImageData.map((item) => (
                        <div key={item.id} className="flex items-center justify-center w-[10vw] h-[10vw]">
                            <img src={item.imgSrc} alt={item.name} 
                            className="scale-200 md:scale-100" />
                        </div>
                    ))}

                </div>
                <div ref={stripe2} className="absolute left-[100%] flex gap-28 md:gap-54 ">
                    {ImageData.map((item) => (
                        <div key={100 + item.id} className="flex items-center justify-center w-[10vw] h-[10vw]">
                            <img src={item.imgSrc} alt={item.name} className="scale-200 md:scale-100" />
                        </div>
                    ))}

                </div>
                
            </div>
        </div>
    );
}