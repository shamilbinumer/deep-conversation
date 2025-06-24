"use client";
import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Home/QuestianSection.scss'

const QuestianSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation 100px before the section is fully in view
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div className='QuestianSectionMainContainer' ref={sectionRef}>
            <section className="section">
                <div className="main-sqare">
                    <div className="left">
                        <img 
                            src="/Images/about-banner.svg" 
                            alt="" 
                            className={isVisible ? 'animate-height' : ''}
                        />
                    </div>
                    <div className="right">
                        <div className='quastian-tag'   data-aos="fade-left"
                            data-aos-duration="1200"
                            data-aos-delay="200">Questian</div>
                        <h1 className="questian">Which is the most important relationship that affects every other aspect of our life?</h1>
                        <div className="ansewer-section">
                            <span className="label">Answer :</span>
                            <div className="answer">Our Marriage Relatiosnhip</div>
                        </div>
                        <div className="explanation-conatiner">
                            <div className="explanation-item">
                                <strong>Emotional Foundation</strong> Marriage provides the primary emotional support system for most adults. Your spouse becomes your closest confidant, affecting your mental health, stress levels, and overall emotional well-being. A strong marriage creates emotional stability that radiates into all other areas of life.
                            </div>
                            <div className="explanation-item">
                                <strong>Daily Life Integration</strong>
                                Unlike other relationships, marriage involves sharing daily routines, living space, and major life decisions. This constant presence means your spouse influences everything from your sleep quality to your daily mood, career choices, and lifestyle habits.
                            </div>
                            <div className="explanation-item">
                                <strong>Financial Partnership</strong>
                               Marriage typically involves merged finances, shared financial goals, and joint decision-making about money. This financial partnership affects your ability to pursue education, career opportunities, home ownership, and retirement planning.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuestianSection