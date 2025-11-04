import React from 'react'
import { useEffect, useState } from 'react'
import Cart  from './Cart'

export const User = () => {
    const [user,setUser]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    console.log("hello")
    let response=await fetch("https://api.github.com/users")
    let data=await response.json()
    console.log(data)
    setUser(data)
  }
  return(
    <>
    <Cart user={user}/>
    </>
  )
}