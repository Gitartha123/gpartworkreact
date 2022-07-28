import React , {useEffect}from 'react';
import Banner from '../templates/Banner'
import Spinner from '../templates/Spinner';

const Packages = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <div>
      <Spinner/>
      <Banner title="Packages"></Banner>
    </div>
  )
}

export default Packages
