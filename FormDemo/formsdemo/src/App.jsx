import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,SetName] = useState([{}]);
  const [list,setList]=useState([{}]);

  function handlingChange(e){
    let name=e.target.name
    let val=e.target.value

    SetName((prev)=>{
      return {...prev,[name]:val}
    })
  }
 
 

  function handlingAllChanges(e){
    e.preventDefault();
     setList(name)
    
   
   
    
  }

  
  
  return (
    <>
        <form onSubmit={handlingAllChanges}>
        <input type="text" name="foodid" placeholder='enter food name' onChange={handlingChange} /> <br />
        <input type="text" name="category" placeholder='enter food category' onChange={handlingChange} /> <br />
        <input type="number" name="price" placeholder='enter food price' onChange={handlingChange} /> <br />

        <button type='submit'>submit</button>
        </form>
      { name!==""?
      list.map((data)=>(
        <ul>
          <li>{data.foodid}</li>
        </ul>
      ))
      :<h1>not available</h1>
    }
    </>
  )
}

export default App
