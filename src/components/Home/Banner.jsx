import React from 'react'
import '../../styles/Home/banner.scss'

const Banner = () => {
  return (
    <div className='banner-container-wrapper'>
      <div className="banner">
        <h1 className='heading'>Unleash Your Potential</h1>
        <h3>DEEP CONVERSATION</h3>
        <p>A healthy marriage is a never-ending conversation. </p>
        <div><button>Services</button></div>
        <img src="/Images/banner-image.svg" className='w-[500px] absolute top-0 right-[17rem]' alt="" data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="200" />
        <h1 className="veritical-heading">happiness</h1>
      </div>
    </div>
  )
}

export default Banner
