import React from 'react';
import '../styles/ShopBanner.css';
import logoImage from '../assets/image 22.png'; // Import the image
import icon1 from '../assets/Lock.svg'; // Import the first icon
import icon2 from '../assets/user.svg'; // Import the second icon

function ShopBanner() {
  return (
    <div className="shop-banner">
      <div className="banner-left">
        <a href="/" className="home">Home</a> | 
        <a href="/products" className="products">Products</a> | 
        <a href="/categories">Categories</a> | 
        <a href="/sales">SALES</a>
      </div>
      <div className="banner-center">
        <img src={logoImage} alt="Logo" className="logo-image" /> {/* Display the logo */}
      </div>
      <div className="banner-right">
        <div className="search-wrapper">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Wrapper for the two icons */}
        <div className="icon-wrapper">
          <div className="icon icon1" style={{ backgroundImage: `url(${icon1})` }}></div> {/* First icon */}
          <div className="icon icon2" style={{ backgroundImage: `url(${icon2})` }}></div> {/* Second icon */}
        </div>
      </div>
    </div>
  );
}

export default ShopBanner;
