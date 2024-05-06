import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Slider from "../component/Slider/Slider";
import Info from "../component/Info/Info";
import Products from "../component/Products/Products";
import TopProducts from "../component/TopProducts/TopProducts";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Info />
      <Products/>
      <TopProducts/>
    </div>
  );
};

export default Home;
