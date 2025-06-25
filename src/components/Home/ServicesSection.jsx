import React from 'react'
import '../../styles/Home/ServicesSection.scss'

const ServicesSection = () => {
    return (
        <div className='serviceSectionMainWrapper'>
            <div className="section">
                <div className="header">
                    <div><h1>Work With Me</h1></div>
                    <div><button>Read More</button></div>
                </div>
                <div className="cards-wrapper">
                    <div className="card">
                        <div className="img"><img src="/Images/1 1 conversation.jpg" alt="" /></div>
                        <div><h3>1:1 Coaching for Women</h3></div>
                        <div><p>Personalized one-on-one coaching designed to empower women with clarity, confidence, and growth in every area of life.</p></div>
                    </div>
                    <div className="card">
                        <div className="img"><img src="/Images/couple-choosing-fabric-furniture-store.jpg" alt="" /></div>
                        <div><h3>Couples Coaching</h3></div>
                        <div><p>Strengthen your relationship through guided conversations, deeper connection, and practical tools tailored for lasting growth.</p></div>
                    </div>
                    <div className="card">
                        <div className="img"><img src="/Images/medium-shot-people-learning-language-work.jpg" alt="" /></div>
                        <div><h3>Group Programs / Workshops</h3></div>
                        <div><p>Interactive group sessions designed to inspire growth, build community, and explore practical tools for real-life change.</p></div>
                    </div>
                    <div className="card">
                        <div className="img"><img src="/Images/people-taking-part-high-protocol-event.jpg" alt="" /></div>
                        <div><h3>Speaking events</h3></div>
                        <div><p>Engaging talks that inspire, educate, and empower audiences through meaningful stories and practical insights.</p></div>
                    </div>
                </div>
                <button className='last-btn'>Free Discovery Session</button>
            </div>
        </div>
    )
}

export default ServicesSection
