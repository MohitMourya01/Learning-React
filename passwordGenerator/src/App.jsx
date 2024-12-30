import { useCallback, useEffect, useState,useRef } from 'react'


function App() {
   const [length,setLength] = useState(8);
   const [allowedNum,setAllowedNum] = useState(false);
   const [allowedChar,setAllowedChar] = useState(false);
   const [password,setPassword] = useState("");

   // useRef hook
   const passwordRef = useRef(null)
     
   const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0,7);
      // window.navigator.clipboard.writeText(password)
   },[password])

   const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(allowedNum) str +="0123456789"
      if(allowedChar) str+="!@#$%^&*-_=+[]{}~` "

      for(let i = 1; i<=length; i++){
        let char = Math.floor((Math.random() * str.length + 1));
        pass += str.charAt(char);
        // console.log(str.charAt(char))
       
      }
      setPassword(pass)
   },[length,allowedChar,allowedNum,setPassword])

   useEffect(()=> {
    passwordGenerator()}, [length,allowedChar,allowedNum,passwordGenerator]
    );
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-3 text-orange-500 bg-gray-800 text-center'>
         <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder='Password'
             readOnly
            ref = {passwordRef}
             />
             <button onClick={copyPasswordToClipboard} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" 
               min={6}
               max={80}
               value={length}
               className='cursor-pointer '
               onChange={(e) => {setLength(e.target.value)}}
               />
               <label htmlFor="">Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                 defaultChecked = {allowedNum}
                 id = "numberInput"
                 onChange={() => {
                  setAllowedNum((prev) => !prev);
                 }}
                 />
                 <label htmlFor="">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                 defaultChecked = {allowedChar}
                 id = "charInput"
                 onChange={() => {
                  setAllowedChar((prev) => !prev);
                 }}
                 />
                 <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
