'use client';
import { useEffect, useRef, useState } from "react";
import FullScreenNavBar from "./FullScreenNavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar() {
    
    const [fullNav, setFullNav] = useState(false);
    const [hideNav, setHideNav] = useState(-1);
    const navBar = useRef(null);
    const menuButton = useRef(null);

    useEffect(()=>{

        hideLinksGSAP();
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(navBar.current,{
            scrollTrigger:{
                trigger:document.documentElement, 
                start: "top top",
                end: "bottom bottom",
                onUpdate:(self)=>{
                    setHideNav(self.direction);
                    setFullNav(false);
                    if(self.direction > 0){
                        hideLinksGSAP();
                    }
                }
            }
        })
    },[])


    function hideLinksGSAP(){
        gsap.to('ul li',{
            y:-100,
            stagger:.2,
            duration:.6
        })
        gsap.to(menuButton.current,{
            y:0,
            delay:.5,
            duration:.4
        })
    }

    function showLinksGSAP(){
        gsap.to('ul li',{
            y:'0%',
            stagger:.2,
        })
        gsap.to(menuButton.current,{
            y:100,
        })
    }

    
    return (
        <div ref={navBar} className={`transitionHideNav fixed z-999 top-0 left-0 w-full ${hideNav > 0 ? 'translate-y-[-100%]' : 'translate-y-0'} `}>

            <div className="font-[Bold] flex justify-between items-center py-8 px-6 xl:px-16">
                <div className="text-[4.2vw] md:text-[2.1vw] lg:text-[1.6vw] xl:text-[1.2vw] 2xl:text-[.9vw]">
                    <h1>Cynthia Ugwu</h1>
                </div>


                <div className="nav-links relative overflow-hidden sm:w-2/6 lg:w-2/7 xl:w-2/9 2xl:w-2/10  ">
                    <ul className="max-sm:hidden uppercase text-[1.8vw] lg:text-[1.5vw] lg:pr-2 xl:text-[1.1vw] xl:pr-4 2xl:text-[.8vw] absolute left-0 top-0 flex justify-between items-center gap-4 h-full w-full">
                        <li className="hoverBottomBorder">Work</li>
                        <li className="hoverBottomBorder">Playground</li>
                        <li className="hoverBottomBorder">Contact</li>
                    </ul>
                    <button 
                        onClick={()=> setFullNav(true)}
                        className="sm:hidden text-[4.2vw] flex items-center justify-center ">MENU<span className="text-sm text-[#9c9c9c]">+</span>
                    </button>
                    <button 
                        onClick={()=> showLinksGSAP()}
                        ref={menuButton}
                        className="max-sm:hidden w-full text-[4.2vw] md:text-[2.1vw] lg:text-[1.6vw] xl:text-[1.2vw] 2xl:text-[.9vw] flex items-center justify-end ">MENU<span className="text-sm text-[#9c9c9c]">+</span>
                    </button>
                </div>
            </div>

            <FullScreenNavBar state={fullNav} setState={setFullNav} />

        </div>
    );
}