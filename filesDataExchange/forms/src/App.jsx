import { useState } from 'react'
import Source from './components/Source';
import './App.css'


function App() {

  const [inputData,SetInputData] = useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const [show, setShow] = useState(false);

  function handleChange(e){
    const {name,value} = e.target;
    SetInputData((prev)=>{
      return {...prev,[name]:value}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    // console.log(inputData);
     setShow(true);
    
    

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        First Name :<input type="text" name='firstName' onChange={handleChange} placeholder='enter name' />
        <br />
        Last Name:<input type="text" name='lastName' placeholder='enter last name' onChange={handleChange} />
        <br />
        Email:<input type="email" name='email' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      {show && <Source data={inputData} />}

    </>
  )
}

export default App
