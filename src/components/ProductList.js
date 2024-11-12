import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/ProductList.css';

// Import the SVG icon from the assets folder
import { ReactComponent as ArrowIcon } from '../assets/arrow-icon.svg';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "Products"));
      const productsList = querySnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <div className="product-items">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            {/* Use the image URL from the Firebase data */}
            <img
              src={product.PictureName}
              alt={product.Name}
              className="product-image"
              loading="lazy" // Lazy loading for better performance
            />
            <h3>{product.Name}</h3>
            <p>Rp. {product.Price}</p>
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="see-more-btn-container">
        <button className="see-more-btn">
          See More
          {/* SVG icon inserted to the right of the button text */}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default ProductList;
