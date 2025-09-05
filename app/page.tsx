'use client'
import Lenis from 'lenis'
import Strip from "./components/Strip";
import Landing from "./(pages)/Landing";
import Page2 from "./(pages)/Page2";
import Page3 from "./(pages)/Page3";
import { useEffect } from 'react';
import Customloading from './components/Customloading';

export default function Home() {

  useEffect(() => {
    
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
      return () => {
      lenis.destroy()
    }
  },[])

  return (
    <div className="relative overflow-hidden">
      <Customloading/>
      <Landing />
      <Page2 />
      <Strip />
      <Page3 />
    </div>
  )
}