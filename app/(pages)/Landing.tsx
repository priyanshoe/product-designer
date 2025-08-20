import Link from "next/link";
import { ArrowUpRight, CircleArrowUp  } from 'lucide-react';

export default function Landing(){
    return(
        <div className="h-screen w-full uppercase p-5 2xl:p-12 flex flex-col justify-between font-[Bold]">

            <div className="heading pt-22 md:pt-28 md:w-7/11 ">
                <h1 className="text-6xl md:text-[10vw] font-medium text-[#9c9c9c] text-start leading-10 md:leading-[7vw]">Product</h1>
                <h1 className="text-6xl md:text-[10vw] font-medium text-[#9c9c9c] text-end">Designer</h1>
                <h3 className="text-xs md:text-[2vw] lg:text-[1.5vw] 2xl:text-[1vw] tracking-widest md:tracking-[.3vw] 2xl:tracking-normal text-end">Based in Toronto</h3>
            </div>

            <div className="side-heading flex flex-col pb-34 md:pb-56 lg:pb-0">
                <span className="text-xs md:text-[2.1vw] lg:text-[1.5vw] 2xl:text-[1vw] text-end">Available for full time & Freelance</span>
                <span className="text-xs md:text-[2.1vw] lg:text-[1.5vw] 2xl:text-[1vw] text-end">Work from sep '24</span>
            </div>

            <div className="links flex gap-10 justify-between items-start">
            {
                ['Previously worked at code and theroy',"Protopie Ambassador"]
                .map((props)=>(
                    <Link 
                    href={'/'} key={props.length} 
                    className="w-70 text-xs md:text-[2.1vw] lg:text-[1.5vw] 2xl:text-[.7vw] flex gap-3 pb-2 ">

                        <h3>{props}</h3>
                        <ArrowUpRight />

                    </Link>
                ))

            }
                <div className="hidden md:flex gap-2 justify-end  lg:w-1/4">
                      <CircleArrowUp className="rotate-180" size={30} />
                        <CircleArrowUp className="rotate-180" size={30} />
                </div>
            </div>

        </div>
    )
}