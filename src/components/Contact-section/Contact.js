import React from 'react';
import './Contact.css';
import map_logo from '../../fontsAndIcons/map-marker-alt-solid.svg';
import phone_logo from '../../fontsAndIcons/phone-solid.svg';
import BC from '../../images/business_card.png';
export default function Contact() {
	return (
		<div className="contact-wrapper" id="contact">
			<div className="contact-header">צרו קשר</div>
			<div className="footer_wrapper">
				<div className="info-wrapper">
					<div className="location__info">
						<img
							className="icon"
							src={map_logo}
							alt="map-icon"
						></img>
						<div className="contact-text">
							מיקום: אלישיב, עמק חפר ישראל.
						</div>
					</div>
					<div className="contact-text">
						<img
							className="icon"
							src={phone_logo}
							alt="phone_logo"
						></img>
						זיו 0528055919 <br></br>
						<img
							className="icon"
							src={phone_logo}
							alt="phone_logo"
						></img>
						דולב 0522222757
					</div>
				</div>
				<img src={BC} className="business_card" alt="logo"></img>
			</div>

			<div className="contact-text my-linkedin">
				© 2020 by Roee Angel. for contact{' '}
				<a href="https://www.linkedin.com/in/roee-angel-3b5b6913a/">
					Linkedin
				</a>
			</div>
		</div>
	);
}
