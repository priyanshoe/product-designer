
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
    return (
        <div className=" border-[#9c9c9c] w-screen overflow-x-scroll border-y-1 ">
                <div className="flex item-center justify-between marquee w-[1200vw] flex-nowrap  py-8 ">
                    {
                        ImageData.map((item) => (
                            <img key={item.id} src={item.imgSrc} alt={item.name} />
                        ))
                    }
                    {
                        ImageData.map((item) => (
                            <img key={item.id} src={item.imgSrc} alt={item.name} />
                        ))
                    }
                </div>
        </div>
    );
}