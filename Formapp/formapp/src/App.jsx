import { useState } from 'react'
import './App.css'

function App() {
  const [neha,setNeha] = useState("Ayush");
  const [age,SetAge] = useState(0);
  const [email,SetEmail] = useState("type@gmail.com");
  const [contact,SetContact] = useState(90090909);
  let arr = [4,53];
  

  const [input,setInput] = useState({});

  function handleChange(e){
    e.preventDefault();
    console.log(input);
    
  }

  function ChangeAble(e){
    let name = e.target.name;
    let value = e.target.value;
    setInput((prev)=>{
      return {...prev,[name]:value}
    })
  }
  
  return (
    <>
      <h1>{neha}</h1>
      <input type="text" onChange={(e)=>{
        setNeha(e.target.value);
      }} />

      <form onSubmit={handleChange}>  {/* this is the recommended way of handling form  */}
        <input type="text" onChange={(e)=>{
          setNeha(e.target.value);
        }}/>
        <button type='submit'>submit</button>
        {/* or */}
        {/* <input type="submit" value="newSubmit" onClick={handleChange}/> */}
      </form>
      <br />


{/* ---------------------------------------------------------------------------- */}
      {/* <form onSubmit={handleChange}>
        <input type="number" onChange={(e)=>{
          SetAge(e.target.value)
        }}/>
        <button type='submit'>submit</button>
        
      </form>
      <br />

      <form onSubmit={handleChange}>  
        <input type="text" onChange={(e)=>{
          SetEmail(e.target.value);
        }}/>
        <button type='submit'>submit</button>
        
      </form>
      <br />

      <form onSubmit={handleChange}> 
        <input type="text" onChange={(e)=>{
          SetContact(e.target.value);
        }}/>
        <button type='submit'>submit</button>
        
      </form>
      <br /> */}

      <form onSubmit={handleChange}>
        Name: <input type="text" name="name" onChange={(e)=>{
          ChangeAble(e);
        }}
        />
        <br />
        Age: <input type="number" name="age" onChange={(e)=>{
          ChangeAble(e);
        }} />
        <button type='submit'>newForm submit</button>
      </form>
    </>
  )
}

export default App
