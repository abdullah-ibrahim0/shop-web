import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          {/* Update the image source to the PNG logo in assets */}
          <img src={require('../assets/Frame 49.png')} alt="Meijwoo" />
        </div>

        <div className="nav-container">
          <nav>
            <h3><a href="#about">About Us</a></h3>
            <ul>
              <li><a href="#news">News</a></li>
              <li><a href="#official-store">Official Store</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </nav>

          <nav>
            <h3><a href="#help">Get Help</a></h3>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#payment">Payment</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="social-links">
          <h4>Follow Us</h4>
          <a href="#" className="social-link">
            <FaFacebookF />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaYoutube />
          </a>
        </div>

        {/* Footer links positioned at the bottom right */}
        <div className="footer-links">
          <a href="#">Guide</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
