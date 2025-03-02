import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side  */}
            <div className="flexColStart f-left">
                {/* <img src="./logo2.png" alt="" width={120} /> */}
                <h1 className='gradient-text'>iManager</h1>
                <div className="secondaryText">
                Our vision is to empower everyone to create the best environment <br />
                 for themselves, where productivity and organization thrive.
                </div>
            </div>

            {/* right side  */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 Cannnaught Place, FL 266, India</span>

                <div className="flexCenter f-menu">
                    <span><a href="">Privacy Policy</a></span>
                    <span><a href="">Terms of Service</a></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
