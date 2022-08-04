import React from 'react';
import logo from '../../image/gpartworklogo.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    /**  Navbar & Carousel Start **/
    <>

      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">

        <Link to="/" className="navbar-brand p-0">
          <img className='shadow-lg rounded-circle' src={logo} width="80" alt="Logo" height="70" />
        </Link>
        <h5 className='d-none d-lg-block' style={{ fontWeight: "bold", color: 'orange' }}>GP</h5><h6 className='text-light d-none d-lg-block'>Artwork</h6>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="" className={`nav-item nav-link ${location.pathname === "/" ? "active" : " "}`}>Home</Link>
            <Link to="aboutus" className={`nav-item nav-link ${location.pathname === '/aboutus' ? "active" : ""}`}>About Us</Link>
            <Link to="packages" className={`nav-item nav-link ${location.pathname === '/packages' ? "active" : ""}`}>Packages</Link>
            <Link to="gallery" className={`nav-item nav-link ${location.pathname === '/gallery' ? "active" : ""}`}>Drawing Gallery</Link>
            <Link to="contactus" className={`nav-item nav-link ${location.pathname === '/contactus' ? "active" : ""}`}>Contact Us</Link>
          </div>
          <a href="quote.html" className="btn btn-primary btn-small m-2 animated slideInLeft text-dark fw-bold">
            <small className="fw-bold text-dark">Track your order<i className="fa fa-1x fa-search mx-2"></i></small>
          </a>
        </div>
      </nav>

      <ul id="social_side_links">
        <li><a style={{backgroundColor: "#3c5a96"}} href="https://facebook.com" target="_blank"><img src="https://www.dropbox.com/s/xk5pdj8nks1ymdh/facebook-icon.png?raw=1" alt="" /></a></li>
        <li><a style={{backgroundColor: "#1dadeb"}} href="https://twitter.com" target="_blank"><img src="https://www.dropbox.com/s/c8in3qcf1uqsqrb/twitter-icon.png?raw=1" alt="" /></a></li>
        <li><a style={{backgroundColor: "#1178b3"}} href="https://linkedin.com" target="_blank"><img src="https://www.dropbox.com/s/pb0a0p7p1pwprue/linkedin-icon.png?raw=1" alt="" /></a></li>
      </ul>
    </>



  )
}

export default Navbar
