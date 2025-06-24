import React from 'react'
import '../../styles/Home/QualityOfMargSection.scss'

const QualityOfMargSection = () => {
  return (
    <div className='quality-of-marg-section'>
        <h1 className='heading'>The quality of your marriage presents itself in </h1>
        <div className="container">
            <div className="left">
                <div className="cards-wrapper">
                    <div className="card" data-aos="fade-right">
                        <div className="card-left"><img src="/Images/la_check-circle.svg" alt="" /></div>
                        <div className="card-right">
                            <h1>Your character</h1>
                            <p>A strong marriage forges strength within you, shaping who you become through love's daily choices.</p>
                            </div>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <div className="card-left"><img src="/Images/la_check-circle.svg" alt="" /></div>
                        <div className="card-right">
                            <h1>Relationships & parenting</h1>
                            <p>The harmony you build as spouses becomes the foundation your children stand on and the model they carry forward.</p>
                            </div>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <div className="card-left"><img src="/Images/la_check-circle.svg" alt="" /></div>
                        <div className="card-right">
                            <h1>Your career</h1>
                            <p>When home is your sanctuary, work becomes your contribution rather than your escape.</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="/Images/whatnow.svg" data-aos='fade-in' alt="" />
            </div>
        </div>
    </div>
  )
}

export default QualityOfMargSection