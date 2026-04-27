import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4>Lcdo. Oscar Amador Ramirez, C.S.P.</h4>
            <p>Providing exceptional legal services since 1998. Our team is dedicated to achieving the best possible outcomes for our clients.</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Connect With Us</h4>
            <a href="#" className="social-icon"><i className="bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi-twitter"></i></a>
            <a href="#" className="social-icon"><i className="bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="bi-instagram"></i></a>
          </div>
        </div>
        <hr className="my-4 bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2026 Lcdo. Oscar Amador Ramirez, C.S.P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
