import React , {useEffect}from 'react';
import Banner from '../templates/Banner';
import Spinner from '../templates/Spinner';
import Latestdrawing from './drawingalleries/Latestdrawing'

const DrawingGallery = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <Spinner/>
            <Banner title="Drawing Gallery"></Banner>
            <Latestdrawing></Latestdrawing>
        </div>
    )
}

export default DrawingGallery
