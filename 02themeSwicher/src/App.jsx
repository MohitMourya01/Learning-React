import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/Theme'
import './App.css'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
     setThemeMode("dark")
  } 

   // actual change in theme
    useEffect(() =>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
    },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      

      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
           {/* {themeBtn} */}
           <ThemeBtn />
        </div>
        <div className='w-full max-w-sm mx-auto'>
         {/* {card} */}
         <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
