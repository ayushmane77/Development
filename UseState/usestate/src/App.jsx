import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [color, setColor] = useState("red")
  const [count,setCount] = useState(0);

  const [list,setList] = useState([34,62,66,51]);
  return (
    <>
      {/* <h1>App component</h1>
      <h1>Colors : {color}</h1>
      <button style={{backgroundColor:color}} onClick={()=>{
        setColor("Blue");
      }}>Change color</button> */}

      <button onClick={()=>{
        setCount(count + 1);
      }}>+</button>

      <span style={{margin:"10px"}}>{count}</span>

      <button onClick={()=>{
        setCount(count - 1 );
      }}>-</button>

      <ol>
        {
          list.map((elements,index)=>(
            <li key={index}>{elements}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
