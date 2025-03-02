import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper" id='started'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Us</span>
                <span className='secondaryText'>
                Subscribe now to access exclusive, unbeatable pricing on our services. 
                    <br />
                    Start organizing and managing your tasks more effectively—your ideal solution is just a click away!
                </span>
                <button className="button">
                    <a href="#pricing-plans">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
