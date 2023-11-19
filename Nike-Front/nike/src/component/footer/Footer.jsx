import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h5>GIFT CARDS</h5>
          <h5>FIND A STORE</h5>
          <h5>BECOME A MEMBER</h5>
          <h5>NIKE JOURNAL</h5>
          <h5>SEND US FEEDBACK</h5>
        </div>
        <div className="footer-section">
          <h5>GET HELP</h5>
          <a href="/order-status" className="footer-link">Order Status</a>
          <a href="/shipping-delivery" className="footer-link">Shipping and Delivery</a>
          <a href="/returns" className="footer-link">Returns</a>
          <a href="/order-cancellation" className="footer-link">Order Cancellation</a>
          <a href="/payment-options" className="footer-link">Payment Options</a>
          <a href="/gift-card-balance" className="footer-link">Gift Card Balance</a>
          <a href="/contact-us" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-section">
          <h5>ABOUT NIKE</h5>
          <a href="/news" className="footer-link">News</a>
          <a href="/careers" className="footer-link">Careers</a>
          <a href="/investors" className="footer-link">Investors</a>
          <a href="/purpose" className="footer-link">Purpose</a>
          <a href="/sustainability" className="footer-link">Sustainability</a>
        </div>
        <div className="footer-section">
          <h5>PROMOTIONS & DISCOUNTS</h5>
          <a href="/student-discount" className="footer-link">Student</a>
          <a href="/military-discount" className="footer-link">Military</a>
          <a href="/teacher-discount" className="footer-link">Teacher</a>
          <a href="/first-responders" className="footer-link">First Responders & Medical Professionals</a>
          <a href="/birthday-discount" className="footer-link">Birthday</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>United States , Starkville , MS</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
