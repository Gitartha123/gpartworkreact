import React from 'react';
import logo from '../../image/dibujo.png';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import UserLogin from '../Users/UserLogin';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';
import Myprofile from '../Users/Myprofile';
import Signup from '../Users/Signup';
import Service from './Service';



const Navbar = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const { setLogin,setLogout,Logout} = bindActionCreators(actionCreators, dispatch);
  
  const loginReducers = useSelector(state => state.loginReducers);
  

  const getFirstname = (fullname)=>{
      return fullname.split(' ')[0];
  }

  const getLogout = ()=>{
     Logout();
     setLogout();
     
  } 
  return (
    /**  Navbar & Carousel Start **/
    <>

      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img  src={logo} width="80" alt="Logo" height="70" />
        </Link>
        <h5 className='d-none d-lg-block' style={{ fontWeight: "bold", color: 'orange' }}>D</h5><h6 className='text-light d-none d-lg-block'>ibujo</h6>
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
            {!loginReducers.status ?
              <li className="nav-item dropdown">
                <a data-bs-toggle="modal" data-bs-target="#loginModal" onClick={()=>{setLogin()}}  className="btn btn-primary btn-small m-2 animated slideInLeft text-dark fw-bold">
                  <small className="fw-bold text-dark" >Login<i className="fa fa-1x fa-user mx-2"></i></small>
                </a>
              </li>
              :
              <span className='navbar'>
                <li className="ms-4 nav-item dropdown p-2">
                  <a className="dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='shadow-lg rounded-circle' src={`${process.env.REACT_APP_API_URL}/images/${loginReducers.userphoto}`} width="25"  height="30" />
                  </a>
                  <ul className="dropdown-menu" >
                    <button className="badge text-danger  fw-normal dropdown-item" href="#"><span>{'Hii '+getFirstname(loginReducers.name)}</span></button>
                    <button className="badge text-dark  fw-normal dropdown-item  fa fa-user"  data-bs-target="#myprofileModal" data-bs-toggle="modal" href="#" aria-expanded="false"><span className='mx-2'>My Profile</span></button>
                    <button className="badge text-dark fw-normal dropdown-item   fa fa-picture-o " href="#"><span className='mx-2'>My Orders</span></button>
                    <button className="badge text-dark fw-normal dropdown-item   fa fa-sign-out " onClick={getLogout}><span className='mx-3'>Logout</span></button>
                  </ul>
                </li>
              </span>

            }

          </div>
        </div>
      </nav>

      <ul id="social_side_links">
        <li><a style={{ backgroundColor: "#3c5a96" }} href="https://facebook.com" target="_blank"><img src="https://www.dropbox.com/s/xk5pdj8nks1ymdh/facebook-icon.png?raw=1" alt="" /></a></li>
        <li><a style={{ backgroundColor: "#1dadeb" }} href="https://twitter.com" target="_blank"><img src="https://www.dropbox.com/s/c8in3qcf1uqsqrb/twitter-icon.png?raw=1" alt="" /></a></li>
        <li><a style={{ backgroundColor: "#1178b3" }} href="https://linkedin.com" target="_blank"><img src="https://www.dropbox.com/s/pb0a0p7p1pwprue/linkedin-icon.png?raw=1" alt="" /></a></li>
      </ul>
      <Signup />
      <UserLogin />
      <Myprofile/>
      <Service/>
    </>

  )
}

export default Navbar
