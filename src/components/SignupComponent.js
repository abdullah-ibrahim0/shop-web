// src/components/SignupComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth, googleProvider, signInWithPopup } from '../config/firebase';
import '../styles/SignupComponent.css';
import { FiDiamond } from 'react-icons/fi';

const SignupComponent = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Google Sign-Up
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Google sign-in successful:', user);
      setSuccess(`Welcome ${user.displayName}!`);
      setError('');

      // Redirect to /page2 after successful sign-up
      navigate('/page2');
    } catch (err) {
      console.error('Google sign-in error:', err);
      setError('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <h1 className="title">Get more benefits by Signing Up & Joining Mejiwoo Community!</h1>
        <h3>FREE Special Gift to a new member</h3>
        <h3>Get 2x JIWOO Points to purchase items</h3>
        <h3>Get special voucher code every month</h3>
        <h3>Claim Voucher Discount Up To 50%</h3>
      </div>

      <div className="right-section">
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            value="Name"
            disabled
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value="Email"
            disabled
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value="Password"
            disabled
          />

          {/* Google Signup Button */}
          <button type="button" className="google-btn" onClick={handleGoogleSignup}>
            Sign Up with Google
          </button>
        </form>

        {/* Display messages */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default SignupComponent;
