import React from 'react';
import ShopBanner from '../components/ShopBanner';
import ProductList from '../components/ProductList';
import SeasonsCollection from '../components/SeasonsCollection';  // Import the SeasonsCollection component
import Season from '../components/Season';
import MoreButtons from '../components/MoreButtons';
import '../styles/HomePage.css';
import SignupComponent from '../components/SignupComponent';
import Footer from '../components/Footer';


function HomePage() {
  return (
    <div className="home-page">
      <ShopBanner /> {/* Static banner */}
      
      <section className="seasons-collection-section">
        <SeasonsCollection /> {/* Add the seasonal collection below the products */}
      </section>
      <h2>Seasons Collection</h2>
      <section className="seasons-collection-section">
        <Season /> {/* Add the seasonal collection below the products */}
      </section>
      <section className="products-section">
        
        <MoreButtons /> {/* Component to display products */}
      </section>
      <section className="products-section">
        <h2>All Products</h2>
        <ProductList /> {/* Component to display products */}
      </section>
      <section className="products-section">
        <SignupComponent /> {/* Component to display products */}
      </section>
      <section className="products-section">
        <Footer /> {/* Component to display products */}
      </section>
      

      
    </div>
  );
}

export default HomePage;
