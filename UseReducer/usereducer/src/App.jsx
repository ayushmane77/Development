import { useReducer, useState } from 'react'
import './App.css'

// const initialState = 0;
// const reducer = (initialStateValue,action)=>{
//   switch(action){
//     case "increment":
//       return initialStateValue + 1;
//       break;
//     case "decrement":
//       return initialStateValue - 1;
//       break;
//     default:
//       return initialStateValue;
//   }
// }

function App() {
  const initialState = 0;
const reducer = (initialStateValue,action)=>{
  switch(action){
    case "increment":
      return initialStateValue + 1;
      break;
    case "decrement":
      return initialStateValue - 1;
      break;
    default:
      return initialStateValue;
  }
}
  const [count, setCount] = useReducer(reducer,initialState);


  return (
    <>
      <button onClick={()=>setCount("increment")}>Add</button>
      <br />
      {count}
      <button onClick={()=>setCount("decrement")}>Subtract</button>
      <br />

    </>
  )
}

export default App
