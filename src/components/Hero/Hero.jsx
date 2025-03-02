import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Transform <br /> your workflow <br /> with <span className="gradient-text">iManager</span>
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
            Get everyone working in a single platform 
            </span>
            <span className="secondaryText">
            designed to manage any type of work.
            </span>
          </div>
          <div className="flexCenter search-bar">
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
            <input type="email" placeholder="Email" />
            <button className="button">Sign up - it's free!</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={40} duration={4} />
                <span>%</span>
              </span>
              <span className="secondaryText" style={{textAlign:'center'}}>Reduction in <br/> social first response time</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={48} duration={4} />
                <span>%</span>
              </span>
              <span className="secondaryText" style={{textAlign:'center'}}>Reduction in <br/> average handling time</span>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src={assets.heroImg2} alt="" style={{objectFit:"cover"}} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
