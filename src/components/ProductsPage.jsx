import React from 'react'
import talc from "../assets/products/talc-web.png";
import feldspar from "../assets/products/feldspar-web.png"
import "../styles/Products.css";
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="product-home">
      <div className="product-section">
        <div className="all-products">
        <div className="product">
            <img src={talc}/>
            <h2 href="" className='product-name'> <Link to="/products/talc">Talc</Link></h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        
        
        </div>
         <button className="about-btn">Browse All Products</button>
        <h1 className="product-head">PRODUCTS</h1>
      </div>
   
    </div>
  )
}

export default ProductsPage
