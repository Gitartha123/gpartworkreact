import React , {useEffect}from 'react';
import Banner from '../templates/Banner'

const Packages = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <div>
      <Banner title="Packages"></Banner>
    </div>
  )
}

export default Packages
