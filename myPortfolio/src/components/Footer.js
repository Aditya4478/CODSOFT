import React from 'react';
import '../pages/Contact.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return(
    <>
    <h5 className='footer'>&#169; {currentYear}. All Rights Reserved. Powered by Aditya Bathani</h5>
  
    </>
  );
}

export default Footer;
