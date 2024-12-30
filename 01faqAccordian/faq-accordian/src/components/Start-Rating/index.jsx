import { useState } from "react";
import {FaStar} from 'react-icons/fa'
import '../styles.css'
export default function StarRating({ noOfstars = 5 }){
    
     const [rating,setRating] = useState(0);
     const [hover,setHover] = useState(0);
      
     function handleClick(getCurrentIndex){
          console.log(getCurrentIndex)
          setRating(getCurrentIndex);

     }
     function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex)
        setHover(getCurrentIndex);
     }
     function handleMouseLeave(){
        setHover(rating);
     }

    return  <div className="flex flex-col">
            <h1 className='text-center text-4xl text-green-400 mb-9  -mt-16 underline font-bold ' > Challange - 03 React </h1>
            <h2 className="text-center text-2xl mb-9 font-bold">Rate Us ...</h2>
        <div className=" flex justify-center items-center pb-72 ">
        
         {[...Array(noOfstars)].map((_,index) => {
             index+= 1;

             return <FaStar 
             className={ ` ${index <= (hover || rating) ? 'active' : 'inactive'}` }
            
             key= {index}
             onClick={() => handleClick(index)}
             onMouseMove={() => handleMouseEnter(index)}
             onMouseLeave={() =>handleMouseLeave()}
             size={40}
              />
         })
         }
         
    </div>
    <hr className=' w-screen h-4 border-black  ' />
    </div>
}