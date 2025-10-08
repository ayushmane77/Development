import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [input,SetInput] = useState("");
  // const [numbber,Setnumber] = useState(0);
  const count = useRef(0);
  // Setnumber((prev)=>{
  //   prev + 1;
  // })

  useEffect(()=>{
    count.current = count.current + 1;
  })

  return (
    <>
     <input type="text" value={input} placeholder='enter text' onChange={(e)=>{
      SetInput(e.target.value)
     }}/> 
     <h1>current value : {count.current}</h1>
     {/* <h1>{numbber}</h1> */}
     <br />
    </>
  )
}

export default App
