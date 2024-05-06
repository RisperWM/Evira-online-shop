import React from "react";

const TopProducts = () => {
  return (
    <div className="topprods">
      <div className="nav">
        <div className="logo">
          <p style={{fontSize:"25px", fontWeight:"700" }}>Top Products</p>
        </div>
        <ul className="navlinks">
            <li><a href="#">LATEST</a></li>
            <li><a href="#">BEST SELLER</a></li>
            <li><a href="#">FEATURED</a></li>          
        </ul>
      </div>
    </div>
  );
};

export default TopProducts;
