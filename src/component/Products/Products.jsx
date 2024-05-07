import React from 'react'
import './Products.css'

const Products = () => {
  return (
    <div className="products">
      <div className="images" id='headphones' style={{justifyContent:"center"}}>
        <p style={{color:"white", fontSize:"25px", fontWeight:"600", margin:"0"}}>Sales up to 30% off</p>
        <p style={{color:"white", fontSize:"25px", fontWeight:"200", margin:"0"}}>Latest sound system</p>
        <a style={{color:"orange", fontSize:"15px"}} href="">VIEW OFFER</a>
      </div>
      <div className="images" id='smart-watch' >
        <div style={{justifyContent:"center", alignItems:"center"}}>
        <p  style={{color:"white", fontSize:"25px", fontWeight:"600", margin:"0", paddingLeft:"30px"}}>20% Off</p>
        <p  style={{color:"white", fontSize:"25px", fontWeight:"200", margin:"0", paddingLeft:"30px"}}>Smart Watch</p>
        <a style={{color:"orange", fontSize:"15px", paddingLeft:"30px"}} href="">SHOP NOW</a>
        </div>
        
      </div>
      <div className="images" id='cctv'>
        <p style={{color:"white", fontSize:"22px", fontWeight:"600", margin:"0"}}>Tablet Computer</p>
      </div>
      <div className="images" id='speaker'>
        <p style={{color:"white", fontSize:"22px", fontWeight:"600", margin:"0"}}>Smart Speaker</p>
      </div>
      
      <div className="images" id='controller'>
        <p style={{color:"white", fontSize:"25px", fontWeight:"600", margin:"0", paddingLeft:"30px"}}>Game</p>
        <p style={{color:"white", fontSize:"25px", fontWeight:"200", margin:"0", paddingLeft:"30px"}}>Controller</p>
        <a style={{color:"orange", fontSize:"15px", paddingLeft:"30px"}} href="">VIEW MORE</a>
      </div>
    </div>
  )
}

export default Products