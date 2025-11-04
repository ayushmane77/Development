import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    function submit(){
        navigate("/dashboard");
        
    }
    return (
    <>
    <div>Login</div>
    <button style={{backgroundColor:"gray"}} onClick={submit}>submit</button>
    </> 
  )
}

export default Login