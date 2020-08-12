import React from 'react';
import './Contact_popup.css';
import logo from '../../images/manager-photo.jpeg';
import stars from '../../images/5stars.png';
export default function Contact_popup() {
	return (
		<div className="contact-warper">
			<img className="contact-img" src={logo} alt="logo"></img>
			<p className="contact-name">זיו ודולב</p>
			<img className="contact-5star" src={stars} alt="stars"></img>
			<a className="Phonebox" href="tel:+972522222757">
				<button className="contact-PN">לחץ כאן לשיחה קולית</button>
			</a>

			<a
				className="whatsappbox"
				href="https://api.whatsapp.com/send?phone=972522222757"
			>
				<button className="contact-WA">
					לחץ כאן לשליחת הודעה ואטספ
				</button>
			</a>
		</div>
	);
}
