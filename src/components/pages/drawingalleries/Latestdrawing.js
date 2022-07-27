import React from 'react';
import pic1 from '../../../image/drawings/pic1.jpg';
import pic2 from '../../../image/drawings/pic2.jpg';
import pic3 from '../../../image/drawings/pic3.jpg';
import pic4 from '../../../image/drawings/pic4.jpg';

const Latestdrawing = () => {
    return (
        <div className="container-fluid  wow fadeInUp " data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-0">Latest Drawings</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-dark-blue rounded overflow-hidden">
                            <div className="blog-img position-relative text-center overflow-hidden p-3">
                                <img className="img-fluid shadow-lg" src={pic1} alt="" />
                                <a className="position-absolute top-0 start-0 bg-orange text-dark rounded-end mt-2 py-1 px-1" href="">01 Jan, 2045</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3 text-orange">
                                    <small className="me-3"><i className="fa fa-pen text-primary me-2"></i>Pencil sketch on  A4 Sized ivory paper </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-dark-blue rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden p-3 text-center">
                                <img className="img-fluid shadow-lg" src={pic2} alt="" />
                                <a className="position-absolute top-0 start-0 bg-orange text-dark rounded-end mt-2 py-1 px-1" href="">01 Jan, 2045</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3 text-orange">
                                    <small className="me-3"><i className="fa fa-pen text-primary me-2"></i>Pencil sketch on  A4 Sized cartridge paper</small>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-dark-blue rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden p-3 text-center">
                                <img className="img-fluid shadow-lg" src={pic3} alt="" />
                                <a className="position-absolute top-0 start-0 bg-orange text-dark rounded-end mt-2 py-1 px-1" href="">01 Jan, 2045</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3 text-orange">
                                    <small className="me-3"><i className="fa fa-paint-brush text-primary me-2"></i>Pencil sketch on  A4 Sized cartridge paper</small>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-dark-blue rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden p-3 text-center">
                                <img className="img-fluid shadow-lg" src={pic4} alt="" />
                                <a className="position-absolute top-0 start-0 bg-orange text-dark rounded-end mt-2 py-1 px-1" href="">01 Jan, 2045</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3 text-orange">
                                    <small className="me-3"><i className="fa fa-paint-brush text-primary me-2"></i>Water Color painting on A3 sized water color paper </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container text-center p-2'>
                        <a href="quote.html" className="btn btn-primary btn-small py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">View More</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Latestdrawing
