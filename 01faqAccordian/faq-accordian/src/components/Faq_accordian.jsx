
// single selection
// multiple selection
import data from './data.js'
import { useState } from 'react'

export default function Accordian() {

   const [selected, setSelected] = useState(null)
   const [enableMulti, setEnableMulti] = useState(false);
   const [multipleId, setMultipleId] = useState([]);

   function handleSingleClick(getCurrentId) {
      console.log(getCurrentId)
      setSelected(getCurrentId === selected ? null : getCurrentId)
   }
   function handleMultiSelection(getCurrentId) {
      let copyMultiple = [...multipleId]
      const findIndexOfCurrent = copyMultiple.indexOf(getCurrentId);
      if (findIndexOfCurrent === -1) copyMultiple.push(getCurrentId)
      else copyMultiple.splice(findIndexOfCurrent, 1);
      setMultipleId(copyMultiple)

   }


   // wrapper
   return <div className=" flex h-screen w-screen flex-col items-center mt-20  gap-15 mb-50">
     
     <h1 className='text-center text-4xl text-green-400 mb-9 underline font-bold ' > Challange - 01 React </h1>
      
     <h1 className='text-center text-3xl font-bold mb-10 '>Faq Accordian</h1>

      <button onClick={() => setEnableMulti(!enableMulti)} className='mb-10 px-14 py-8 bg-slate-200 '> Enable Multi Selection </button>
      

      {/* Accordian component */}
      <div className=" w-1/2 ">

         {

            data && data.length > 0 ?
               data.map(dataItem => <div className="flex justify-center font-bold rounded-xl bg-slate-500 mb-8 p-8 ">
                  {/* title content */}
                  <div onClick={enableMulti ? () => handleMultiSelection(dataItem.id) : () => handleSingleClick(dataItem.id)} className="title text-white flex  flex-start justify-between align-middle cursor-pointer flex-wrap ">
                     <h3 className='text-black'>{dataItem.question} </h3>

                     <span className='text-black m-3 bg-white rounded-full  w-8 h-8 flex justify-center '> + </span>

                     {enableMulti ? multipleId.indexOf(dataItem.id) !== -1 && (<div className='content text-white h-auto  '> {dataItem.answer} </div>)
                        : selected === dataItem.id && (<div className='content text-white h-auto  '> {dataItem.answer} </div>)
                     }

                     {/* {selected === dataItem.id || multipleId.indexOf(dataItem.id) != -1 ?
                        <div className='content text-white h-auto  '> {dataItem.answer} </div>
                        : null
                     } */}
                  </div>
               </div>)
               : <div>No data found</div>
         }
      </div>
       {/* <hr className=' w-full h-4 border-black ' /> */}
   </div>
}