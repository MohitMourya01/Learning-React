import {useState} from 'react'

function App() {
  const [counter,setCounter]=useState(15)
  // array with two 
  const addValue = () =>{
    setCounter(counter+1);
  }
  
  const removeVal = ()=>{
    if(counter>1)
    setCounter(counter-2);
  }
  //let counter = 5;
  //uI updation
  // const addValue =()=>{
  //   counter = counter+1;
  //   // document.querySelector(".xyz").innerHTML = counter
  //   console.log(counter)
 
  // }
  
  return (
    <>
     <h1>chai aur react</h1>
     <h2 className="xyz">counter value: {counter}</h2>
     <button
      onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button onClick={removeVal}>Remove value {counter}</button>
    </>
  )
}

export default App
