import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className='link-light link-underline-dark'>Home</Link></li>
              <li><Link to="/about"className='link-light link-underline-dark'>About Us</Link></li>
              <li><Link to="/policy"className='link-light link-underline-dark'>Policy</Link></li>
              <li><Link to="/contact" className='link-light link-underline-dark'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Useful Link</h5>
            <ul className="list-unstyled">
              <li><a href="/" className='link-light link-underline-dark'>FAQ</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Reviews</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Privacy Policy and Terms of Service</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Return and Refund Policy</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Payment Options</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Address: 37C, Chandigarh</li>
              <li><i className="fa fa-phone mr-2" aria-hidden="true"></i>Call: +91 9876543210</li>
              <li><i className="fa fa-envelope mr-2" aria-hidden="true"></i>Email: Tshoppee@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
      <div className="text-center py-3">
      <p className="mt-1">
        &copy; {currentYear} Tshoppee. All rights reserved.
      </p>
    </div>
    </div>
  );
};

export default Footer;
