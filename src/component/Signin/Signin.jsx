import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { SiApple } from "react-icons/si";


const Signin = () => {
  return (
    <div className="signin">
        <h3>Nara's Shop</h3>
        <form className='form' action="">
            <label htmlFor="">Name:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email:</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Phone Number</label>
            <input type="number" name="" id="" />
            <label htmlFor="">Password:</label>
            <input type="password" name="" id="" />
            <label htmlFor="">Confirm Password:</label>
            <input type="password" name="" id="" />

            <input type="button" value="SIGN UP" />
        </form>
        <div className="icon">
        <FaFacebook size={26} color="blue"/>
        <TfiGoogle size={25} color="red"/>
        <SiApple size={25} color='gray'/>


        </div>
    </div>
  )
}

export default Signin