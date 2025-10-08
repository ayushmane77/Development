import React from 'react'
import { Link } from 'react-router-dom'
const Headers = () => {
  return (
    <>
    <nav style={{backgroundColor:"#000B58",color:"white",padding:"10px",width:"100%",display:"flex",gap:"30px"}}>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/avatar/4">Avatar</Link>
        <Link to="/book_type/oldbook">OldBooks</Link>
        <Link to="/book_type/newbook">Newbooks</Link>
    </nav>
    </>
  )
}

export default Headers