import React from 'react';
import '../styles/Season.css'; // Import the CSS for styling

// Import the image from the assets folder
import season from '../assets/Frame 86.png';

function Season() {
  return (
    <div className="seasons-collection">

      {/* Use the imported image */}
      <img 
        src={season} 
        alt="Seasonal Collection" 
        className="seasons-image" 
      />
    </div>
  );
}

export default Season;
