import React from 'react'

const Prices = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                    <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
                </div>
                <div className="row g-0">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="bg-dark-blue rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary mb-1">Basic Plan (Portrait Art)</h4>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3 text-light">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px", color:"orange" }}>&#8377;</small>1000.00
                                </h1>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>Paper Size</span><h6 className="text-white fw-bold pt-1">A4</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>Medium</span><h6 className="text-white fw-bold pt-1">Pencil</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>No. of Persons</span><h6 className="text-white fw-bold pt-1">1</h6></div>
                                <div className="d-flex justify-content-between mb-2 text-orange"><span>Frame</span><i className="fa fa-check text-danger pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="bg-white rounded shadow position-relative" style={{ zIndex: 1 }}>
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-dark-blue mb-1">Standard Plan (Portrait Art)</h4>
                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>&#8377;</small>1500.00
                                </h1>
                                <div className="d-flex justify-content-between mb-3 text-dark-blue"><span>Paper Size</span><h6 className="text-dark fw-bold pt-1">A3</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-dark-blue"><span>Medium</span><h6 className="text-dark fw-bold pt-1">Pencil</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-dark-blue"><span>No. of Persons</span><h6 className="text-dark fw-bold pt-1">1</h6></div>
                                <div className="d-flex justify-content-between mb-2 text-dark-blue"><span>Frame</span><i className="fa fa-check text-danger pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="bg-dark-blue rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary mb-1">Advanced Plan (Portrait Art)</h4>

                            </div>
                            <div className="p-5 pt-0">
                                <h1 className="display-5 mb-3 text-light">
                                    <small className="align-top text-orange" style={{ fontSize: "22px", lineHeight: "45px" }}>&#8377;</small>2000.00
                                </h1>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>Paper Size</span><h6 className="text-light fw-bold pt-1">A3</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>Medium</span><h6 className="text-light fw-bold pt-1">Pencil</h6></div>
                                <div className="d-flex justify-content-between mb-3 text-orange"><span>No. of Persons</span><h6 className="text-light fw-bold pt-1">2</h6></div>
                                <div className="d-flex justify-content-between mb-2 text-orange"><span>Frame</span><i className="fa fa-check text-danger pt-1"></i></div>
                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
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

export default Prices
