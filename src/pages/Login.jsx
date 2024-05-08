import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Signin from '../component/Signin/Signin'

const LoginScreen = () => {
  return (
    <div className="login">
        <Navbar/>
        <Signin/>
    </div>
  )
}

export default LoginScreen