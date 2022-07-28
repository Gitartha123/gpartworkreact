import React, { useEffect } from 'react';
import slider2 from '../../image/slider/slider2.jpg';
import Facts from '../pages/Facts';
import Spinner from './Spinner';




const Slider = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <Spinner/>
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                    <img className="w-100" src={slider1} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h4 className='text-light'>"Gift your loved ones, a special gift on their special occasions"</h4>
                        <div className="p-3" style={{ maxWidth: "900px" }}>

                            <div className="display-1 text-white mb-md-4 animated zoomIn"><span style={{ color: 'orange' }}>GP</span>Artwork
                                <h6 className='text-small text-light fw-bold fst-italic'>Life on a canvas</h6>
                            </div>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">Sign Up</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Login</a>
                        </div>
                    </div>
                </div> */}
                    <div className="carousel-item active">
                        <img className="w-100" src={slider2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4 className='text-light d-none d-lg-block'>"Gift your loved ones, a special gift on their special occasions"</h4>
                            <div className="p-3" style={{ maxWidth: "900px" }}>

                                <div className="display-1 text-white mb-md-4 animated zoomIn"><span style={{ color: 'orange' }}>GP</span>Artwork
                                    <h6 className='text-small text-light fw-bold fst-italic'>Life on a canvas</h6>
                                </div>
                                <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">Sign Up</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Login</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                    <img className="w-100" src={slider3} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: "900px" }}>

                            <div className="display-1 text-white mb-md-4 animated zoomIn"><span style={{ color: 'orange' }}>GP</span>Artwork
                                <h6 className='text-small text-light fw-bold fst-italic'>Life on a canvas</h6>
                            </div>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">Sign Up</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Login</a>
                        </div>
                    </div>
                </div> */}
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
                <Facts />
            </div>
        </>


    )
}

export default Slider
