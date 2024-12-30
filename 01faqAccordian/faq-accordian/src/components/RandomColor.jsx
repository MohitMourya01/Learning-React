
import { useEffect, useState } from "react"

export default function RandomColor(){

    const [typeOfColor,setTypeColor] = useState("hex");
    const [color,setColor] = useState('#000000');
    
    function RandomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    function handleRandomHex(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"
        for(let i=0;i<6;i++){
            hexColor+= hex[RandomColorUtility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function handleRandomRgb(){
        const r = RandomColorUtility(256)
        const g = RandomColorUtility(256)
        const b = RandomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') handleRandomRgb();
        else handleRandomHex();
    },[typeOfColor])
    
    return (
        <div style={{backgroundColor: `${color}`}} className= {` flex flex-col h-screen w-screen m-50 items-center`}>
         
        <h1 className='text-center text-4xl text-green-400 my-9 underline font-bold ' > Challange - 02 React </h1>
            <div className="item-center">
            <button onClick={() => setTypeColor('hex')} className="bg-white text-black m-4 rounded-md p-2 outline-double">Create HEX Color</button>
            <button onClick={() => setTypeColor('rgb')} className="bg-white text-black m-4 rounded-md p-2 outline-double">Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHex : handleRandomRgb} className="bg-white text-black m-4 rounded-md p-2 outline-double">Generate Random Color</button>
            </div>
            <div className="text-4xl font-bold mt-40 text-white ">
                <h3 className="mb-10"> {typeOfColor === 'rgb'? 'RGB Color-' : "HEX Color-" }</h3>
                <h1>{color}</h1>
                {/* as rgb section not working use the useEffect hook */}
            </div>
        </div>
    )
}