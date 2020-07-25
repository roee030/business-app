import React from 'react';
import './Hero.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import electricity from '../../images/elecricity-box.jpg';
import controlling from '../../images/female-engineer-controlling-lights.jpg';
import network from '../../images/network.jpg';
import alarm from '../../images/Security-alarm.jpg';


export default function Hero() {
    return (
        <div className='hero'>
            <OwlCarousel
            className='owl-theme'
            items='1'
            autoplay={true}
            loop={true}
            >
                <div className="item">
                    <h1>גדשדג</h1>
                    <img src={electricity}></img>
                
                </div>
                <div className="item">
                    <img src={controlling}></img>
                </div>
                <div className="item">
                    <img src={network}></img>
                </div>
                <div className="item">
                    <img src={alarm}></img>
                </div>
                
            </OwlCarousel>
        </div>
    )
}
