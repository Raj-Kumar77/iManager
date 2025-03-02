import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Features.css'
import data from '../../utils/slider'
import {sliderSettings} from '../../utils/common'
const Residencies = () => {
  return (
    <section className="r-wrapper" id='features'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Discover</span>
          <span className="primaryText">Best Features</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  {/* <span style={{ color: "orange" }}>$</span> */}
                  {/* <span>{card.price}</span> */}
                </span>
                <span className='primaryText'>{card.name}</span>
                <span className='secondaryText'>{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies

const SliderButtons = () =>{
    const swiper = useSwiper()
    return(
        <div className="r-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
