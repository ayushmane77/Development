import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './component/Demo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Demo/>
    </>
  )
}

export default App
