import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [add,setAdd] = useState(0);
  const [minus,setMinus] = useState(100);

  const multiplication = useMemo(function multi(){
    console.log("this is called ");
    return add * 10;
  },[add]);

  return (
    <>
     {multiplication}
     <button onClick={()=>{
      setAdd(add+1);
     }}>Add</button> 

     {add}
     <br />

     <button onClick={()=>{
      setMinus(minus-1);
     }}>Subtract</button> 

     {minus}
     <br />
     
    </>
  )
}

export default App
