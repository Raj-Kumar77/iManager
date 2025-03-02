import React from 'react'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Companies from "../../components/Comapnies/Companies";
import Features from "../../components/Features/Features";
import Value from "../../components/Value/Value";
import Contact from "../../components/Contact/Contact";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
import Plans from "../../components/Plans/Plans";

const Home = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Features/>
      <Plans/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default Home
