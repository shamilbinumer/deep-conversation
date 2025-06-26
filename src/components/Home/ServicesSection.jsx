import React from 'react'
import '../../styles/Home/ServicesSection.scss'
import '../../styles/Common/common.scss'
import Link from 'next/link'

const ServicesSection = () => {
    return (
        <div className='serviceSectionMainWrapper'>
            <div className="section" id='services'>
                {/* <div className="header">
                    <div><h1>Work With Me</h1></div>
                    <div><button>Read More</button></div>
                </div> */}
                <h2 data-aos='fade-up' className="text-4xl text-center md:text-5xl font-[800] text-gray-800 mb-4">
                    Work With Me
                </h2>
                 <p data-aos='fade-up' className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
            Let’s collaborate to bring your ideas to life. Whether you need a website, web app, or a custom solution — I’m here to help you build something great.
          </p>
                <div className="cards-wrapper">
                    <div className="card" data-aos='fade-up' data-aos-duration='1000'>
                        <div className="img"><img src="/Images/1 1 conversation.jpg" alt="" /></div>
                        <div><h3>1:1 Coaching for Women</h3></div>
                        <div><p>Personalized one-on-one coaching designed to empower women with clarity, confidence, and growth in every area of life.</p></div>
                    </div>
                    <div className="card" data-aos='fade-up' data-aos-duration='1200'>
                        <div className="img"><img src="/Images/couple-choosing-fabric-furniture-store.jpg" alt="" /></div>
                        <div><h3>Couples Coaching</h3></div>
                        <div><p>Strengthen your relationship through guided conversations, deeper connection, and practical tools tailored for lasting growth.</p></div>
                    </div>
                    <div className="card" data-aos='fade-up' data-aos-duration='1400'>
                        <div className="img"><img src="/Images/medium-shot-people-learning-language-work.jpg" alt="" /></div>
                        <div><h3>Group Programs / Workshops</h3></div>
                        <div><p>Interactive group sessions designed to inspire growth, build community, and explore practical tools for real-life change.</p></div>
                    </div>
                    <div className="card" data-aos='fade-up' data-aos-duration='1600'>
                        <div className="img"><img src="/Images/people-taking-part-high-protocol-event.jpg" alt="" /></div>
                        <div><h3>Speaking events</h3></div>
                        <div><p>Engaging talks that inspire, educate, and empower audiences through meaningful stories and practical insights.</p></div>
                    </div>
                </div>
                <Link href='/contact-us'><button className='last-btn'>Free Discovery Session</button></Link>
            </div>
        </div>
    )
}

export default ServicesSection
