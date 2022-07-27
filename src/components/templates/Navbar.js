import React  from 'react';
import logo from '../../image/gpartworklogo.png';
import {Link,useLocation} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const gotoTop = ()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  return (
    /**  Navbar & Carousel Start **/

    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="index.html" className="navbar-brand p-0">
        <img className='shadow-lg rounded-circle' src={logo} width="80" height="70" />
      </a>
      <h5 className='d-none d-lg-block' style={{ fontWeight: "bold", color: 'orange' }}>GP</h5><h6 className='text-light d-none d-lg-block'>Artwork</h6>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="" className={`nav-item nav-link ${location.pathname === "/"?"active":" "}`}>Home</Link>
          <Link to="aboutus" className={`nav-item nav-link ${location.pathname === '/aboutus'?"active":""}`}>About Us</Link>
          <Link to="packages" className={`nav-item nav-link ${location.pathname === '/packages'?"active":""}`}>Packages</Link>
          <Link to="gallery" className={`nav-item nav-link ${location.pathname === '/gallery'?"active":""}`}>Drawing Gallery</Link>
          <Link to="contactus" className={`nav-item nav-link ${location.pathname === '/contactus'?"active":""}`}>Contact Us</Link>
        </div>
        <a href="quote.html" className="btn btn-primary btn-small m-2 animated slideInLeft text-dark fw-bold">Order Now</a>
      </div>
    </nav>


  )
}

export default Navbar
