import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import products from "../assets/products";
const Shop = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const handleClick = (group) => {
    setSelectedGroup(group);
  };

  const filteredProducts =
    selectedGroup === "All"
      ? products
      : products.filter((product) => product.prodGroup === selectedGroup);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="nav">
        <Navbar />
      </div>
      <div style={{ marginTop: "70px" }} className="shopProd">
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{
              padding: "2px",
              color: "black",
              backgroundColor: "orange",
              border: "1px solid black",
              width: "110px",
              borderRadius: "10px",
            }}
            key="All"
            onClick={() => handleClick("All")}
            className={selectedGroup === "All" ? "active" : ""}
          >
            All
          </button>
          {[...new Set(products.map((product) => product.prodGroup))].map(
            (group) => (
              <button
                style={{
                  padding: "7px",
                  color: "black",
                  backgroundColor: "orange",
                  border: "1px solid black",
                  width: "110px",
                  borderRadius: "10px",
                }}
                key={group}
                onClick={() => handleClick(group)}
                className={selectedGroup === group ? "active" : ""}
              >
                {group}
              </button>
            )
          )}
        </div>
        <div
          className="productss"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "30px",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                style={{ height: "210px", width: "240px", resize: "contain" }}
                src={product.imageUrl}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
