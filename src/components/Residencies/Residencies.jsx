import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/commons'
const Residencies = () => {
  return (
    <section id='residencies' className="residence-wrapper">
        <div className="paddings innerWidth residence-container">
            <div className="residence-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card,index)=>(
                        <SwiperSlide key={index}>
                            <div className="flexColStart residence-card">
                                <img src={card.image} alt="" />
                                <span className="secondaryText residence-price">
                                    <span style={{color: 'orange'}}>$</span><span>{card.price}</span>    
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter residence-btn">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
export default Residencies