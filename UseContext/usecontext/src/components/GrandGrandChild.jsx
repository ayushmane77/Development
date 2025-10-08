import React from 'react'
import { useContext } from 'react'
import {data,data1} from '../App'
const GrandGrandChild = () => {
  return (
    <div>GrandGrandChild
        {/* {useContext(data)} */}
        {/* <data.Consumer>
        {
        (name)=>{
            return(
                <h1>Name : {name}</h1>
            )
        }
    }
        </data.Consumer> */}
        <h1>Name : {useContext(data)}</h1>
        <h1>Array : {useContext(data1)}</h1>
        <h1>{data1}</h1>
    </div>
       
  )
}

export default GrandGrandChild