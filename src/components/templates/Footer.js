import React from 'react';
import logo from '../../image/gpartworklogo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        /**  Footer Start **/
        <div>
         
            <div className="container-fluid text-white" style={{background:"#061429"}}>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{height:'75px'}}>
                                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">gpartworkassam.in</a>. All Rights Reserved.


                                    Designed by <a className="text-white border-bottom">GP Artwork</a></p>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="fa fa-arrow-up"></i></a>
        </div>

    )
}

export default Footer
