import React, {useEffect} from 'react'
import Banner from '../templates/Banner'
import Spinner from '../templates/Spinner';

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, [])
  return (
    <>
      <Spinner/>
     <Banner title="About us"></Banner>
    </>
     
  )
}

export default Aboutus
