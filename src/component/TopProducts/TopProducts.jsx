import React, { useState } from "react";
import "./TopProducts.css";
import products from "../../assets/products";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="prodImage" />
      <div className="product-info">
        <h3 style={{marginBottom:"5px"}}>{product.name}</h3>
        <p style={{marginBottom:"5px"}}>{product.description}</p>
        <p style={{marginBottom:"5px"}}>{product.price}</p>
      </div>
    </div>
  );
};

const ProductList = ({ products, status }) => {
  if (!products) return null;

  const filteredProducts = products.filter(
    (product) => product.status.toLowerCase() === status.toLowerCase()
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const TopProducts = () => {
  const [selectedStatus, setSelectedStatus] = useState("latest");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="topprods">
      <div className="nav">
        <p className="title">Top Products</p>
        <ul className="links">
          <li>
            <a href="" onClick={() => handleStatusClick("latest")}>
              LATEST
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleStatusClick("best-seller")}>
              BEST SELLER
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleStatusClick("featured")}>
              FEATURED
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <ProductList products={products} status={selectedStatus} />
    </div>
  );
};

export default TopProducts;
