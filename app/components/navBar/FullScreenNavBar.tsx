import Footer from "../Footer";

export default function FullScreenNavBar(props:{state:any,setState:any}){

    return(
        <div className={`absolute transitionNav left-0 top-0 ${ props.state ? 'translate-y-0' : 'translate-y-[-100%]'} w-full bg-[#A3A3A3] text-black font-[Regular]`}>

            <div className="font-[Bold] flex justify-between items-center pt-8 pb-6 px-6 border-b-1 border-[#ffffff7e]">
                <div className="text-[4.2vw]">
                    <h1>Cynthia Ugwu</h1>
                </div>
                <div className="nav-links">
                    <button
                    onClick={()=>props.setState(false)}
                    className="text-[4.2vw] uppercase flex items-center justify-center ">Close</button>
                </div>
            </div>

            <div className="px-6 mt-30 mb-65">
                <ul className="uppercase font-[Bold] text-[10.5vw]">
                    {
                        ['Home','Work','Playground','Contact']
                        .map((prop,index) =>(
                            <li key={index} className="pb-2">{prop}</li>
                        ))
                    }
                </ul>
            </div>

            <Footer/>
        </div>
    )
}