import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Car from './component/Car.jsx'
import Fruits from './component/fruits.jsx'
import Food from './component/Food.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 2.props destructing way
  let b = 28;
  let numbers = [4,52,56,34];
  let newObject = {
    id:108,
    name: "hello"
  }

  // 1.props method
  let arr = [4,5,6];
  let obj = {
    id:102,
    Name:"Ayush"
  };
  
  // 3.for function epxression
  let favFood = "pizza";
  let array3 = [6,3,6,2675,0];
  return (
    <>
      <h1>App component</h1>
      {/* <Car msg = "Good morning" name={10 + 10} b={b} array={arr} Object = {obj} array2 = {arr2}/> */}

      {/* <Fruits b={b} numbers = {numbers} newObject={newObject}/> */}

      <Food favFood = {favFood} Arr3 = {array3}/>

    </>
  )
}

export default App
