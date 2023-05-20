import React, {  useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import slider2 from '../../image/slider/slider2.jpg';
import logo from '../../image/dibujo.png';
import Spinner from './Spinner';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../states';


const Slider = () => {
    const loginReducers = useSelector(state => state.loginReducers);
   
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        

    }, [])

    const dispatch = useDispatch();
    const { setLogout } = bindActionCreators(actionCreators, dispatch);


    return (
        <>
            <Spinner />
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={slider2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4 className='text-light d-none d-lg-block'>Welcome to Dibujo, where art comes alive.</h4>
                            <div className="p-3 " style={{ maxWidth: "900px" }}>
                                <div className='text-center'>
                                    <img className='d-none d-lg-block m-auto' src={logo} width="140" alt="Logo" height="150" />
                                </div>

                                <div className="display-1 text-white mb-md-4 animated zoomIn"><span style={{ color: 'orange' }}>D</span>ibujo
                                    <h5 className='text-small text-light fw-bold fst-italic'>Order your portrait and witness the magic unfold</h5>
                                </div>

                                {!loginReducers.status ?
                                    <>
                                        <a data-bs-toggle="modal" data-bs-target="#loginModal" onClick={()=>{setLogout()}}  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold">Order Now</a>
                                        <a data-bs-toggle="modal" data-bs-target="#loginModal" className="btn btn-light py-md-3 px-md-5 animated slideInRight fw-bold">Track Order</a>
                                    </>
                                    :
                                    <>
                                        <a data-bs-toggle="modal" data-bs-target="#serviceModal"   className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-dark fw-bold ">Order now</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight fw-bold">Track Order</a>
                                    </>

                                }

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}

export default Slider
