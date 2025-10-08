import { useState,useRef } from 'react'

import './App.css'

function App() {
  const [name,SetName] = useState();
  const [email,SetEmail] = useState();
  const [number,SetNumber] = useState();
  const inputRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();

  // function resetInput(){
  //   SetName("");
  //   inputRef.current.focus();
  // }

  // function resetEmail(){
  //   SetEmail("");
  //   emailRef.current.focus();
  // }

  // function resetNumber(){
  //   SetNumber(0);
  //   numberRef.current.focus();
  // }

  function reset(e){
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log(emailRef.current.value);
    inputRef.current.value = "";
    emailRef.current.value = "";
    inputRef.current.focus();
    emailRef.current.focus();
  }

  return (
    <>
      {/* Enter Name : <input type="text" ref={inputRef} value={name} onChange={(e)=>{
        SetName(e.target.value);
      }} />
      <button onClick={resetInput}>Reset</button>
      <br />

      Enter email :<input type="email" ref={emailRef} value={email} onChange={(e)=>{
        SetEmail(e.target.value);
      }} />
      <button onClick={resetEmail}>Reset</button>
      <br />

      Enter Number<input type="number" value={number} onChange={(e)=>{
        SetNumber(e.target.value);
      }} />
      <button onClick={resetNumber}>Reset</button>
      <br /> */}

      <form onSubmit={reset}>

      Enter Name : <input type="text" ref={inputRef}  placeholder='enter name' />
      <br />

      Enter email :<input type="email" ref={emailRef} placeholder='enter email'/>
      <button type="submit">Submit</button>
      
      <br />
      </form>
    </>
  )
}

export default App
