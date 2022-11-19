import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
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

    const loginReducers = useSelector(state=>state.loginReducers);
    return (
        <>
            <Spinner />
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={slider2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4 className='text-light d-none d-lg-block'>"What on earth can be a greater present than gifting them their own portrait"</h4>
                            <div className="p-3" style={{ maxWidth: "900px" }}>

                                <div className="display-1 text-white mb-md-4 animated zoomIn"><span style={{ color: 'orange' }}>GP</span>Artwork
                                    <h6 className='text-small text-light fw-bold fst-italic'>Life on a canvas</h6>
                                </div>
                                
                                {!loginReducers.status ?
                                <>
                                    <a data-bs-toggle="modal" data-bs-target="#signupModal" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">Sign Up</a>
                                    <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Login</a>
                                </>
                                : 
                                <>
                                <a data-bs-toggle="modal" data-bs-target="#signupModal" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold ">Order Now</a>
                                    <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Track Order</a>
                                </>
                                    
                                }
                               
                            </div>
                            <div className='row d-none d-lg-block'>
                                <div className="col-lg-12 text-center text-lg-end">
                                    <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                                        <a className="btn btn-lg btn-outline-light bg-success btn-lg-square rounded-circle me-2" href=""><i className="fab fa-whatsapp fw-normal"></i></a>
                                        <a className='text-white fw-bold'>7086775828</a>
                                        <a className="btn btn-lg btn-outline-light mx-2 bg-danger btn-lg-square rounded-circle" href=""><i className="fa fa-envelope fw-normal"></i></a>
                                        <a className='text-white fw-bold'>gpartworkassam@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Facts />
            </div>
        </>


    )
}

export default Slider
