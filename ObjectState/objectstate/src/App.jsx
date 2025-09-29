import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [carinfo,setCarinfo] = useState({
    carNo : 1001,
    name: "Audi",
    price : 890000000
  });
  let arr = Object.values(carinfo); // [1001,"Audi",8900000]

  function changePrice(){
    setCarinfo((previous)=>{
      return {...previous,price : 40000000}
    });
  }

  return (
    <>
      {/* <ul>
        {
          arr.map((elem,index)=>{
            return <li>{elem}</li>
          })
        }
      </ul> */}

      <ul>
        <li>{carinfo.carNo}</li>
        <li>{carinfo.name}</li>
        <li>{carinfo.price}</li>
      </ul>

      {/* <button onClick={changePrice} >change price</button> */}
      <button onClick={()=>{
        setCarinfo((prev)=>({
          ...prev,
          price:5000000,
        }))
      }}>click me for changing price</button>
    </>
  )
}

export default App
