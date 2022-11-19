import React from 'react'

const Facts = () => {
    return (
        <div>
            <div className="container-fluid facts  pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                    
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-dark-blue shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px"}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-2x fa-shopping-cart text-dark-blue"></i>
                                </div>
                                <div className="ps-4">
                                    <h2 className="text-orange mb-0" data-toggle="counter-up">Place Order</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px"}}>
                                <div className="bg-dark-blue d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-2x fa-pencil text-white"></i>
                                </div>
                                <div className="ps-4">
                                   
                                    <h2 className="mb-0" data-toggle="counter-up">Sketch</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-dark-blue shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                                    <i className="fa  fa-2x fa-picture-o text-dark-blue"></i>
                                </div>
                                <div className="ps-4">
                                    <h2 className="text-orange mb-0" data-toggle="counter-up">Frame</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: "150px"}}>
                                <div className="bg-dark-blue d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-2x fa-truck text-white"></i>
                                </div>
                                <div className="ps-4">
                                   
                                    <h2 className="mb-0" data-toggle="counter-up">Deliver</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts
