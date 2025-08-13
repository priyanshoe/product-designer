import Button from "./components/Button"

export default function Page2(){
    const data = [
        {
            name : "Lucid Motor",
            year : 2023,
        },
        {
            name : "Baron Capital",
            year : 2023,
        },
        {
            name : "NFL",
            year : 2024,
        },
        {
            name : "Placenew",
            year : 2024,
        },
        {
            name : "Somoso",
            year : 2023,
        },
    ]
    return(
        <div className=" px-4 py-12 md:py-20 lg:py-32 lg:pl-18 lg:pr-42">
            {
                data.map((props:{name:String, year:number}) =>(
                    <div className="flex justify-between items-center  px-2 py-5 lg:py-10 border-[#616161] border-t-1">
                        <h1 className=" font-[bold] uppercase text-[9.5vw] md:text-[7.5vw] text-[#9c9c9c]">{props.name}</h1>
                        <h3 className="font-[regular] text-[3vw] md:text-[2vw] lg:text-[1vw]">{props.year}</h3>
                    </div>
                ))
            }
            <div className="pt-4 md:pt-12 lg:pt-28">
                <Button/>
            </div>
        </div>
    )
}