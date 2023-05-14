import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  
  const navigate = useNavigate()
  return (
    <div>
    Payment Successful.
    <br /> 
    <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default Success