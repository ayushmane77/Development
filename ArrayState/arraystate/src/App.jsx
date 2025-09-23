import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)
  const [test,setTest] = useState(["test1"]);

  function add(){
    let newMsg = `test${count}`;
    setTest((previousState)=>{
      return [...previousState,newMsg]
    });
    setCount(count + 1);
    
  }
  return (
    <>
  <ul>
        {
          test.map((elem,index)=>{
            return <li key={index}>{elem}</li>
        })
        }
      </ul>
      <button onClick={add}>click here to add</button>
    </>
  )
}

export default App
