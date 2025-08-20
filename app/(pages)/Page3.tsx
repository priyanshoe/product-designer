import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";

export default function Page3() {
    const image = { name: "Cynthia", src: "./images/cynthia.webp" };
    return(
        <div className="relative font-[Regular] w-full h-screen md:h-[70vh] lg:h-screen flex items-start justify-center px-6 pt-12">
            
            <div className="container flex max-sm:flex-col gap-8 lg:gap-15 xl:gap-20 md:pl-24 lg:pl-64 xl:pl-100 2xl:pl-120 xl:pr-25 2xl:pr-50 ">

                <div className="image h-auto w-60 md:w-400 lg:w-400 xl:w-450 2xl:w-300  ">
                    <img src={image.src} alt={image.name} 
                    className="w-full h-full object-contain object-top" />
                </div>

                <div className="text  ">
                    <h3 className="text-sm text-[#9c9c9c] uppercase pb-2">(About me)</h3>
                    <p className="text-base lg:text-base xl:text-lg">
                        Lorem ipsum , architecto neque architecto neque architecto neque architecto neque architecto neque  neque similique repellendus, quaerat cum facere porro nobis itaque eos corrupti, nemo rem ea recusandae obcaecati eveniet consequuntur velit. Incidunt vitae iusto necessitatibus quidem laborum inventore ipsam nulla quis porro sit, et facere libero cum ad delectus, repudiandae exercitationem dolores similique quasi at ab?
                    </p>
                    <div className="pt-8">
                        <Button name="Let's talk" />
                    </div>
                </div>
                
            </div>

            <div className="link absolute uppercase left-4 lg:left-8 top-[90%] md:top-[70%]">
                <h3 className="text-xs text-[#9c9c9c] font-bold">Oops, almost forgot...</h3>
                <h2 className="flex gap-2 text-sm">Subscribe to my youtube channel <ArrowUpRight /></h2>
            </div>
        </div>
    )
}