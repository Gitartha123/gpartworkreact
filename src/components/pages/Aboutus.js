import React, {useEffect} from 'react'
import Banner from '../templates/Banner'

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, [])
  return (
     <Banner title="About us"></Banner>
  )
}

export default Aboutus
