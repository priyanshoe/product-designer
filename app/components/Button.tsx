export default function Button(props:{name:String}){
    return(
        <button className="capitalize font-[Regular] text-[3.5vw] md:text-[1.7vw] lg:text-[1.3vw] xl:text-[1vw] border-white border-1 rounded-full px-4 py-1 ">
            {props.name}
        </button>
    )
}