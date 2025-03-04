import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpen,setMenuOpen]= useState(false)
  const getMenuStyles = (menuOpen) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpen && '-100%'}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* <img src="./logo.png" alt="logo" width={100} /> */}
        <h1 className='gradient-text'>iManager</h1>


        <OutsideClickHandler onOutsideClick={()=>{setMenuOpen(false)}}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <a href="#features">Features</a>
            <a href="#pricing-plans">Pricing Plans</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <button className="button">
              <a href="/login">Login</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header
