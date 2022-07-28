import React ,{useEffect}from 'react'
import Banner from '../templates/Banner'
import Spinner from '../templates/Spinner';

const Contactus = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <Spinner/>
            <Banner title="Contact Us"></Banner>
        </div>
    )
}

export default Contactus
