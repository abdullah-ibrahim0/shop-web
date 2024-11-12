import React from 'react';
import '../styles/SeasonsCollection.css'; // Import the CSS for styling

// Import the image from the assets folder
import seasonalImage from '../assets/Vector.png';

function SeasonsCollection() {
  return (
    <div className="seasons-collection">

      {/* Use the imported image */}
      <img 
        src={seasonalImage} 
        alt="Seasonal Collection" 
        className="seasons-image" 
      />
    </div>
  );
}

export default SeasonsCollection;
