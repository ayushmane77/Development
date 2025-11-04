import { useState,useRef } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {register,handleSubmit,formState:{errors},watch} = useForm();
  const textField  = useRef();
  // or
  // const form = useForm();
  // const {regiser,handleSubmit,formState} = form;
  // const {errors} = formState;

  // register will retrive all the input fiels values .
  // handleSubmit is a function 
  // fomrState is an object which will contain all the errors values

  function onsubmit(data){
    console.log("input data is ", data);
    // textField.current.value = ""
    // textField.current.focus();
  }


  return (
    <>
    <form onSubmit={handleSubmit(onsubmit)}>
      <label htmlFor="name">Name:</label>
      <input ref={textField} type="text" placeholder='enter name' id='name' {...register("name",{required:{
        value:true,
        message:"name is required"
      },
      minLength:{
        value:5,
        message:"enter 5 characters"
      },
      maxLength:{
        value:10,
        message:"name should not exceed more than 10"
      }
      
      })} />
      
      <span >{errors.name?.message}</span>
      <br />

      <label htmlFor="email">EmailId</label>
      <input type="text" placeholder='enter emailId' id='email' {...register("email",{required:{
        value:true,
        message:"emailId is required"
      },
      pattern:{
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:"Invalid email pattern"
      }
      })} />
      <span>{errors.email?.message}</span>
      <br />

      <label htmlFor="password">Set Password</label>
      <input type="text" placeholder='set password' id='password' {...register("password",{required:{
        value:true,
        message:"password is required"
      },
      minLength:{
        value:4,
        message:"weak password"
      },
      maxLength:{
        value:10,
        message:"password length should not more than 10"
      },
      pattern:{
         value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{4,10}$/,
        message:"please create a strong password"
      }
      })} />
      <span>{errors.password?.message}</span>
      <br />

      <label htmlFor="confirmPassowrd">Confirm Password</label>
      <input type="text" placeholder='confirmPassowrd' id='confirmPassowrd' {...register("confirmPassowrd",{required:{
        value:true,
        message:"please re-write the password"
      },
      validate:(value)=>
         value === watch("password") || "Passwords do not match"
      
      
      })} />
      <span>{errors.confirmPassowrd?.message}</span>
      <br />
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App
