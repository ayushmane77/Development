import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './components/Demo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Ayush";
  return (
    <>
      <div>
        <Demo name={name} />
      </div>
    </>
  )
}

export default App
