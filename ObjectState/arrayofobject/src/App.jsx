import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [carList,setCarList] = useState([{carNo:101,name:"BMW",price:4500000},{carNo:102,name:"Audi",price:7800000}]);


  return (
    <>
    <h1>Traversing an object</h1>
      {
        carList.map((elem,index)=>{
          return <ul key={index}>
            <li>{elem.carNo}</li>
            <li>{elem.name}</li>
            <li>{elem.price}</li>
          </ul>
        })
      }
    </>
  )
}

export default App
