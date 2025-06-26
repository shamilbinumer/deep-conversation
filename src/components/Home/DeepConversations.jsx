import React from 'react'
import '../../styles/Home/deepConversations.scss'
import Link from 'next/link'

const DeepConversations = () => {
    return (
        <div className='deepConversationsMainWrapper'>
            <div className="section">
                <div className="content-container">
                    <div className="left-content">
                        <div className="hero-text">
                            <h1 data-aos='fade-up'>Ready to create a new reality for yourself and your marriage through deep vulnerable honest conversations?</h1>
                        </div>
                        <div className="cta-section">
                            <Link href='/contact-us'>
                            <button className="discovery-btn" data-aos='fade-up'>
                                Let's chat
                            </button>
                            </Link>
                        </div>

                        <div className="testimonial-section" >
                            <div className="quote-block" data-aos='fade-up'>
                                <h2>But Naji <span className="subtitle">(that's what friends and family call me)</span>,</h2>
                                <p>I've tried everything. Nothing has worked.</p>
                                <p className="question">How will this help?</p>
                            </div>

                            <div className="response-text" data-aos='fade-up'>
                                <p>I understand that feeling completely. You've probably tried couples therapy, read countless books, maybe even attended workshops. But here's what makes this different - we're not just talking about surface-level changes.</p>

                                <p>My approach focuses on the Islamic principles of mercy, compassion, and genuine understanding between spouses. We'll work together to rebuild that deep connection you once had, using proven techniques that honor your faith and values.</p>

                                <p>The couples I work with often say they wish they had found this approach years earlier. You don't have to keep struggling in silence - there is hope, and there is a way forward.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-content" data-aos='fade-left'>
                        <img src="/Images/rommance.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeepConversations