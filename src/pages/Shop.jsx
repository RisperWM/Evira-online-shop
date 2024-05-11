import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts, toggleLike } from "../redux/action";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import products from "../assets/products";

const Shop = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const likes = useSelector((state) => state.likes);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
                  borderRadius: "6px",
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
            <div
              key={product.id}
              className="productCard"
              style={{
                backgroundColor: "#eef0f1",
                margin: "4px",
                borderRadius: "8px",
                width: "200px",
                height: "350px", // Fixed typo: Added "px"
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ padding: "5px", flex: "1" }}>
                <img
                  style={{
                    height: "170px",
                    width: "190px",
                    resize: "contain",
                  }}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <h3 style={{ fontSize: "16px" }}>{product.name}</h3>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  {product.description}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: "600", margin: "0" }}>
                  {product.price}
                </p>
                <button
                  onClick={() => dispatch(addToCart(product.id))}
                  style={{
                    backgroundColor: "#d4d4d4",
                    border: "1px solid gray",
                    borderRadius: "7px",
                    padding: "10px",
                  }}
                >
                  Add To Cart
                </button>
              </div>
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
