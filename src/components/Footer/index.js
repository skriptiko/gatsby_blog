import React from 'react';

import './index.css';

import footer from '../../images/general-footer-image.jpg';

const Footer = () => {
    return (
        <div className='footer' style={{
            backgroundImage: `linear-gradient(
            to top, 
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.9) 50%,
            rgba(0,0,0,1) 100%),
            url(${footer})`
            }}>
        </div>
    )
}

export default Footer;