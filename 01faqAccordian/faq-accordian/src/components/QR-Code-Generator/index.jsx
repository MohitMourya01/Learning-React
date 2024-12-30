import { useState } from "react"
import QRCode from 'react-qr-code'


export default function QRCodeGenerator(){

      const [qrCode, setQrcode] = useState('')
      const [input, setInput] = useState('')
          
      function handleGenerateQr(){
         setQrcode(input)
         setInput('')
      }

     return (
        <div className="-mt-36 mb-10 border-2 rounded-lg px-20 pt-20 shadow  ">
            
            <h1 className='text-center text-4xl text-green-400 mb-9 mt-4 underline font-bold ' > Challange - 06 React </h1>
      
           <h1 className='text-center text-3xl font-bold mb-10 '>QR Code Generator</h1>
            <div className="mb-16">
                <input type="text" value={input} name = "qr-code" placeholder="Enter your value here..." 
                onChange={(e) => setInput(e.target.value)}
                className="outline-none border-2 border-black m-4 rounded-md p-2  "
                 />

                <button disabled={input && input.trim()!== "" ? false : true} onClick={handleGenerateQr}
                className="outline rounded-md p-1.5 bg-slate-300"
                >Generate QR</button>
            </div>
            <div className=" mb-16">
                <QRCode id="qr-code-value" 
                 value = {qrCode} size={400} 
                 className="bg-white" 
                />
            </div>
        </div>
     )
}