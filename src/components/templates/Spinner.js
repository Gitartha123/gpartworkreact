import React from 'react';
import logo from '../../image/gpartworklogo.png';

const Spinner = () => {
    return (
        <div>
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <img src={logo} width="150" height="150"/>
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export default Spinner