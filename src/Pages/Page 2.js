import React from 'react';
import ShopBanner from '../components/ShopBanner';
import Page2Image from '../components/page2Image';
import Footer from '../components/Footer';
import '../styles/HomePage.css';


function Page2() {
  return (
    <div className="home-page">
      <ShopBanner /> {/* Static banner */}
      
      <section className="seasons-collection-section">
        <Page2Image /> {/* Add the seasonal collection below the products */}
      </section>
      <section className="products-section">
        <Footer /> {/* Component to display products */}
      </section>
      
      

      
    </div>
  );
}

export default Page2;
