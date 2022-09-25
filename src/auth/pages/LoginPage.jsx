import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  
  const Navigate = useNavigate();

  const onLogin = () =>{
    Navigate('/', {replace:true});
  }
  
  return (
    <div className='container mt-5'>
     <h1>Login</h1>
     <hr />
     <button type="button" className="btn btn-outline-primary"
     onClick={onLogin}
     >Login</button>
     
    </div>
  )
}
