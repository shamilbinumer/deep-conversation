import React from 'react'
import '../../styles/Home/aboutme.scss'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className='AboutMeMainWrapper'>
      <div className="section">
            <div className="left" data-aos='fade-right'>
                <img src="/Images/young-businesswoman-sitting-arm-chair-with-crossed-legs-looking-cellphone.jpg" alt="" />
            </div>
            <div className="right">
                <div className="content">
                    <h1 data-aos='fade-up'>Hi, I’m Najiha!!</h1>
                    <p data-aos='fade-up'>LIFE STYLE COACH AND WRITER</p>
                    <div data-aos='fade-up' className="intro">As a lifestyle coach and writer, I’m passionate about helping women step into their fullest potential with confidence, clarity, and purpose. Through personalized coaching, I support women in building intentional routines, setting healthy boundaries, and creating a life that aligns with their values. My approach is gentle yet empowering—focused on real-life growth, not perfection.</div>
                    <div data-aos='fade-up' className="intro">Whether through one-on-one sessions or my writing, I create a safe and judgment-free space where women feel seen, supported, and uplifted. I believe lasting change begins with self-awareness and is sustained through consistent, meaningful action. Together, we’ll turn small steps into powerful transformations.</div>
                   <Link href='/about' className='cursor-pointer'> <button data-aos='fade-up'>About Me</button></Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AboutMe
