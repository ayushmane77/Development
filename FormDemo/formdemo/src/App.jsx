import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Ayush");
  const [surName,setSurName] = useState("Mane");

  return (
    <>
      <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value);
      }} />

    <br />

    <input type="text" value={surName} onChange={(e)=>{
        setSurName(e.target.value);
      }} />
      <h1>{name}</h1>

      <h1>{surName}</h1>
    </>
  )
}

export default App
