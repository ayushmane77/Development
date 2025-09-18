import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './component/Demo'
import Hello from './component/Hello'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let age = 22;
  let name = "Ayush";
  let salary = 80000000;
  let arr = ["banana","mango","apple"];
  let obj = {
    id:101,
    name: "ayush",
    programming : ["java","javscript"]
  }
  let list = [56,45,26,47,27];

  function fun(){
    console.log("this is a fun function");
    
  }
  return (
    <>
      <h1>Hello</h1>
      <Demo />
      <Hello />
      <h2>name is {name}</h2>
      <h2>age is {age}</h2>
      {/* <h2>`my name is ${name}`</h2>  template literal does not work */}
      <h2>`my age is ${age}`</h2>
      {/* hello there */}
    <h2>my salary is {salary}</h2>
    <h2>my favourite fruit is {arr[1]}</h2>
    <h2>my favourite fruit is {arr[2]}</h2>
    <h2>the object is ${obj.programming[0]}</h2>
    <h2>the object value is {obj["id"]}</h2>
    <ul>
      {/* in react map method of array contain () not {} for anonmyour arrow function */}
      {list.map((data)=>(
        <li>{data}</li>
      ))
      }
    </ul>
    {fun()}
    </>
  )
}

export default App
