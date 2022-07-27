import React ,{useEffect}from 'react'
import Banner from '../templates/Banner'

const Contactus = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <Banner title="Contact Us"></Banner>
        </div>
    )
}

export default Contactus
