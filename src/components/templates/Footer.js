import React from 'react'
import logo from '../../image/gpartworklogo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        /**  Footer Start **/
        <div>
            <div className="container-fluid bg-dark text-light  wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                <a href="index.html" className="navbar-brand">
                                    <h1 className="m-0 text-white"><img className='shadow-lg rounded-circle' src={logo} width="100" height="90" /></h1>
                
                                </a>
                                <p className="mt-3 mb-4 text-dark fw-bold">"What on earth can be a greater present than gifting them their own portrait "</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                        <button className="btn btn-dark">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">Christianbasti, Guwahati, Assam</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">gpartworkassam@gmail.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <p className="mb-0">+91 9101917098</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link className="text-light mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                        <Link className="text-light mb-2" to="/aboutus"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                        <Link className="text-light mb-2" to="/packages"><i className="bi bi-arrow-right text-primary me-2"></i>Packages</Link>
                                        <Link className="text-light mb-2" to="/gallery"><i className="bi bi-arrow-right text-primary me-2"></i>Drawing Gallery</Link>
                                        <Link className="text-light" to="/contactus"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Popular Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link className="text-light mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                        <Link className="text-light mb-2" to="/aboutus"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                        <Link className="text-light mb-2" to="/packages"><i className="bi bi-arrow-right text-primary me-2"></i>Packages</Link>
                                        <Link className="text-light mb-2" to="/gallery"><i className="bi bi-arrow-right text-primary me-2"></i>Drawing Gallery</Link>
                                        <Link className="text-light" to="/contactus"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{background:"#061429"}}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{height:'75px'}}>
                                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">gpartworkassam.in</a>. All Rights Reserved.


                                    Designed by <a className="text-white border-bottom">Gitartha Puzari</a></p>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>

    )
}

export default Footer
