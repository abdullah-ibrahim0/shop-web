import React from 'react';
import './ShopBanner.css';
import logo from '../assets/logo.png'; // Adjust the path as needed for the logo image
import userIcon from '../assets/user-icon.png'; // Adjust the path for user icon

function ShopBanner() {
  return (
    <div className="shop-banner">
      {/* Left Navigation Links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#sales">SALES</a>
      </div>

      {/* Centered Logo */}
      <div className="logo">
        <img src={logo} alt="Shop Logo" />
      </div>

      {/* Right-side Search and User Icon */}
      <div className="search-user">
        <input type="text" placeholder="Search products..." className="search-bar" />
        <img src={userIcon} alt="User" className="user-icon" />
      </div>
    </div>
  );
}

export default ShopBanner;
