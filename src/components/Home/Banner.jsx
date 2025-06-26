import React from 'react'
import '../../styles/Home/banner.scss'

const Banner = () => {
  return (
    <div className='banner-container-wrapper'>
      <div className="banner">
        <div className="content-section">
          <h1 className='heading'>Unleash Your Potential</h1>
          <h3 className='subtitle'>DEEP CONVERSATION</h3>
          <p className='description'>A healthy marriage is a never-ending conversation.</p>
          <div className="button-container">
            <a href="#services"><button className='services-btn'>Services</button></a>
          </div>
        </div>
        
        <div className="image-section">
          <img 
            src="/Images/banner-image.svg" 
            className='banner-image' 
            alt="Banner illustration" 
            // data-aos="fade-in"
            // data-aos-duration="1200"
            // data-aos-delay="200" 
          />
        </div>
        
        <h1 className="vertical-heading" data-aos="fade-down">happiness</h1>
      </div>
    </div>
  )
}

export default Banner