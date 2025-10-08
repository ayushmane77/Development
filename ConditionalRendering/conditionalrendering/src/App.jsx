import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn,setLoggedIn] = useState(true);


  function switchToggle(){
    setLoggedIn((prev)=>!prev)
  }
  return (
    <>
      {isLoggedIn?(
        <h1 style={{backgroundColor:"green"}}>successful logged in</h1>
      ):(
        <h1 style={{backgroundColor:"red"}}>Not logged in</h1>
      )}
        <button onClick={switchToggle}>toggle</button>
    </>
  )
}

export default App
