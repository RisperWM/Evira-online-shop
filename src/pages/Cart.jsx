import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <Navbar />
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p style={{justifyContent:"center", alignItems:"center", fontSize:"22px", fontWeight:"700", height:"400px", margin:"20px"}}>Your cart is empty!!</p>
      ) : (
        <div style={{display:"flex", flexDirection:"row", margin:"40px"}} >
          {cart.map(item => (
            
            <div
            key={item.id}
            className="productCard"
            style={{
              backgroundColor: "#eef0f1",
              margin: "4px",
              borderRadius: "8px",
              width: "200px",
              height: "350px",
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
                src={item.imageUrl}
                alt={item.name}
              />
              <h3 style={{ fontSize: "16px" }}>{item.name}</h3>
              <p style={{ margin: "0", fontSize: "14px" }}>
                {item.description}
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
                {item.price}
              </p>
              <button
                style={{
                  backgroundColor: "#d4d4d4",
                  border: "1px solid gray",
                  borderRadius: "7px",
                  padding: "10px",
                }}
              >
                Order
              </button>
            </div>
          </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Cart;

