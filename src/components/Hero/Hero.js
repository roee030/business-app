import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Hero.css';
import electricity from '../../images/elecricity-box.jpg';
import controlling from '../../images/female-engineer-controlling-lights.jpg';
import network from '../../images/network.jpg';
import alarm from '../../images/Security-alarm.jpg';
import ContactFix from '../../components/Contact-popup/Contact_popup.js';

export default function Hero() {
	return (
		<div className="hero">
			<OwlCarousel
				className="owl-theme"
				items="1"
				autoplay={true}
				loop={true}
				dots={false}
			>
				<div className="item">
					<div className="wrapper">
						<h1 className="title-item">
							{' '}
							.מצבעים קריאות שירות של שקע עובד ועד בניה של בתים
							שיפוצים ותוספות
						</h1>
						<img className="img-item" src={electricity}></img>
					</div>
				</div>
				<div className="item">
					<div className="wrapper">
						<h1 className="title-item">
							{' '}
							.אנו מתרינים, מתכנתים ומוכרים ציוד חכם לבית{' '}
						</h1>
						<img className="img-item" src={controlling}></img>
					</div>
				</div>
				<div className="item">
					<div className="wrapper">
						<h1 className="title-item">
							.אנו דואגים לכיסוי רשת מלא בכל הבית ובחוץ{' '}
						</h1>
						<img className="img-item" src={network}></img>
					</div>
				</div>
				<div className="item">
					<div className="wrapper">
						<h1 className="title-item">
							{' '}
							.מכוונים את המערכת כך שהבית עובד בשבילך ולא אתה
							בשבילו
						</h1>
						<img className="img-item" src={alarm}></img>
					</div>
				</div>
			</OwlCarousel>
			<ContactFix className="contact" />
		</div>
	);
}
