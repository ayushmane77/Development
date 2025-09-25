import { useState } from 'react'
import React, {Component} from 'react'
import './App.css'



export default class App extends Component {
  constructor(props){
    super(props) // if we want to use state inside the consturctor , we need to call super call constructor using this method
    this.state = {id:101,count:0}
  }
  render() {
    return (
      <>
      <div>{this.state.id}</div>
      <h1>{this.state.count}</h1>

      <button onClick={this.incement}>+</button>
      </>
    )
  }
  incement = ()=>{
    this.setState({count:this.state.count + 1})
  }


  // these are the lifecyle of react
  componentDidMount(){
    console.log("state get loaded");
    
  }
  componentDidUpdate(){
    console.log("state get updated");
    
  }
  componentWillUnmount(){
    console.log("state get deleted");
    
  }
}
