import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid footer p-5 mt-5">
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-1">
          <div className="col p-3 align-items-center align-items-sm-start d-flex flex-column gap-2">
            <h4  style={{fontSize:'16px'}} className="text-light">Information</h4>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">About Us</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Contact Us</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Terms & Conditions</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Shiping Guide</Link>
          </div>
          <div className="col p-3 align-items-center align-items-sm-start d-flex flex-column gap-2">
            <h4 style={{fontSize:'16px'}} className="text-light">USEFUL LINK</h4>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Online Store</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Customer Services</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Promotion</Link>
            <Link style={{fontSize:'15px'}} className="text-decoration-none text-light">Top Brands</Link>
          </div>
          <div className="col p-3 align-items-center align-items-sm-start justify-content-center d-flex flex-row gap-2">
          <span style={{fontSize:'25px' ,color:'white'}}><i class="bx bxl-facebook-square"></i></span>
          <span style={{fontSize:'25px' ,color:'white'}}><i class="bx bxl-instagram-alt"></i></span>
          <span style={{fontSize:'25px' ,color:'white'}}><i class="bx bxl-github"></i></span>
          <span style={{fontSize:'25px' ,color:'white'}}><i class="bx bxl-twitter"></i></span>
          <span style={{fontSize:'25px' ,color:'white'}}><i class="bx bxl-pinterest"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
