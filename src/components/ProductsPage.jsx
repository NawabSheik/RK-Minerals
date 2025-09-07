import React from 'react'
import talc from "../assets/products/talc-web.png";
import feldspar from "../assets/products/feldspar-web.png"
import "../styles/Products.css";

const ProductsPage = () => {
  return (
    <div className="product-page">
      <div className="product-section">
        <div className="product">
            <img src={talc}/>
            <h2>Talc</h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2>Feldspar</h2>
        </div>
        <div className="product">
            <img src={talc}/>
            <h2>Talc</h2>
        </div>
        <h1 className="product-head">PRODUCTS</h1>
      </div>
    </div>
  )
}

export default ProductsPage
