import React from 'react'
import pic1 from '../../image/drawings/pic7.jpeg';
import pic2 from '../../image/drawings/pic8.jpg';
import pic3 from '../../image/drawings/pic9.jpg';
const Artondemand = () => {
  

    return (
        <div className="container-fluid  wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-0">Our Packeges</h1>
                </div>
                <div className="row g-0">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="bg-dark-blue rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary text-center mb-1"> Pencil</h4>
                            </div>
                            <div className="p-5 pt-0 text-center">
                                <h1 className="display-5 mb-3 text-light">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px", color: "orange" }}>Price start @ &#8377;</small>1200.00
                                </h1>
                                <img src={pic1} alt="Logo" style={{ width: "100%", height: "80%" }} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="bg-white rounded shadow position-relative" style={{ zIndex: 1 }}>
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-dark-blue text-center mb-1">Pencil Color</h4>
                            </div>
                            <div className="p-5 pt-0 text-center">
                                <h1 className="display-5 mb-3 text-primary">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px", color: "orange" }}>Price start @ &#8377;</small>1200.00
                                </h1>
                                <img src={pic2} alt="Logo" style={{ width: "100%", height: "80%" }} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="bg-dark-blue rounded">
                            <div className="border-bottom py-4 px-5 mb-4">
                                <h4 className="text-primary text-center mb-1">Water Color</h4>

                            </div>
                            <div className="p-5 pt-0 text-center">
                                <h1 className="display-5 mb-3 text-light">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px", color: "orange" }}>Price start @ &#8377;</small>1000.00
                                </h1>
                                <img src={pic3} alt="Logo" style={{ width: "100%" }} className='img-fluid' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Artondemand
