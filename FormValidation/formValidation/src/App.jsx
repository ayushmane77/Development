import { useState } from 'react'

import './App.css'

function App() {
  const [formInput, setFormInput] = useState({name:"",emailId:"",password:""});
  const [errors,setErrors] = useState({});

  function handleChange(e){
    const {name,value} = e.target;
    setFormInput((prev)=>{
      return {...prev,[name]:value}
    })
  }

  function onSubmit(e){
    e.preventDefault();
    // console.log(formInput);
    if(validate()){
      console.log("form inputs :" ,formInput);
      
    }
    else{
      console.log("fill all the details");
      
    }
  }

  function validate(){
    let newErros = {};
    if(formInput.name.trim()===""){
      newErros.name = "Enter the name";
    }
    else if(formInput.name.trim().length <5){
      newErros.name = "enter 5 characters"
    }


    if(!formInput.emailId.trim()){
      newErros.emailId = "enter the email"
    }
    else if(!/\S+@\S+\S+\./.test(formInput.emailId)){
      newErros.emailId = "enter the valid emailId"
    }

    if(!formInput.password.trim()){
      newErros.password = "enter the password"
    }
    setErrors(newErros); // {{}} , {}=> {emailId : "enter the email"}
    console.log(Object.keys(newErros).length);
    
    return Object.keys(newErros).length === 0
  }
  return (
    <>
    <form onSubmit={onSubmit} >
      Name: <input type="text"
      name='name' 
      value={formInput.name}
      placeholder='enter name'
      onChange={handleChange} />
      {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
      <br />
      EmailId : <input type="email"
      name='emailId' 
      value={formInput.emailId}
      placeholder='enter email'
      onChange={handleChange}
      
      />
      {errors.emailId && <span style={{color:"red"}}>{errors.emailId}</span>}
      <br />
      password : <input type="password"
      name='password'
      value={formInput.password}
      placeholder='enter password'
      onChange={handleChange}
      />
      {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
      <br />
      <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
