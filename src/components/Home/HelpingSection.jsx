import React from 'react'
import '../../styles/Home/helpingSection.scss'

const HelpingSection = () => {
    return (
        <div className='helpingSectionMainWrapper' data-aos="fade-in"
                            data-aos-duration="2200"
                            data-aos-delay="600">
            <div className="section">
                <h1>That is why I love helping heal marriages. Because I know firsthand how impactful it can be in improving the quality of your life on all levels.</h1>
                <div className="card-section">
                    <div className="card card-one"  >
                        <div className="card-content">
                            <h2>Taqwa</h2>
                            <p>Based on Islamic faith principles and values </p>
                        </div>
                    </div>
                    <div className="card card-two">
                        <div className="card-content">
                            <h2>Trust</h2>
                            <p>100% safe, confidential and judgement free </p>
                        </div>
                    </div>
                    <div className="card card-three">
                        <div className="card-content">
                            <h2>PROVEN</h2>
                            <p>Backed by Science, Research, and Evidence</p>
                            {/* <div className="author">
                                <span>VINH GIANG</span>
                                <small>OPEN YOUR MIND</small>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpingSection