import { useState } from 'react'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  return (
    <div className="container">
      <button>Generate Random Color</button>
      <button>Create Hex Color</button>
      <button>Create RGB Color</button>
    </div>
  )
}

export default App
