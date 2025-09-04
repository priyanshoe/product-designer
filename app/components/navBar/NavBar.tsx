'use client';
import { useEffect, useRef, useState } from "react";
import FullScreenNavBar from "./FullScreenNavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar() {
    
    const [fullNav, setFullNav] = useState(false);
    const [hideNav, setHideNav] = useState(-1);
    const navBar = useRef(null);


    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(navBar.current,{
            scrollTrigger:{
                trigger:document.documentElement, 
                start: "top top",
                end: "bottom bottom",
                scrub:true,
                onUpdate:(self)=>{
                    setHideNav(self.direction);
                    setFullNav(false);
                }
            }
        })
    },[])

    
    return (
        <div ref={navBar} className={`transitionHideNav md:hidden fixed z-999 top-0 left-0 w-full ${hideNav > 0 ? 'translate-y-[-100%]' : 'translate-y-0'} `}>

            <div className="font-[Bold] flex justify-between items-center py-8 px-6">
                <div className="text-[4.2vw]">
                    <h1>Cynthia Ugwu</h1>
                </div>
                <div className="nav-links">
                    <ul className="hidden justify-between items-center gap-4">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Download</li>
                    </ul>
                    <button 
                    onClick={()=> setFullNav(true)}
                    className="text-[4.2vw] flex items-center justify-center ">MENU<span className="text-sm text-[#9c9c9c]">+</span></button>
                </div>
            </div>

            <FullScreenNavBar state={fullNav} setState={setFullNav} />

        </div>
    );
}