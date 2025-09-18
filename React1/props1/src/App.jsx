import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Car from './component/Car'
import Fruits from './component/fruits'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = 45
  let fruit = "mango"
  function fun(){
    console.log("this is a function of app.jsx which is passed as a prop to the car.jsx")
  }

  function hello(){
    console.log("this is a hello function");
    
  }
  return (
    <>
      {/* <Car a1 = {a} fun1 = {fun} /> */}
      {/* <Fruits Fruit = {fruit}/> */}
      {/* {fun()} */}
      {/* <button onClick={fun()}>Click</button> */}
      <button onClick={()=>{fun()}}>Click</button> 
      {/* if we want to pass an event in react, we need to execute it in a anonymous callback arrow fuction */}

      <button onClick={()=>{
        hello()
      }}>Hello</button>
    </>
  )
}

export default App
