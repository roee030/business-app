import React from 'react';
import './Connection.css';
import PhonecallLogo from '../../fontsAndIcons/phone-square-alt-solid.png';
import WhatsappLogo from '../../fontsAndIcons/whatsapp-square-brands.png';
export default function Connection() {
	return (
		<div className="miniNavbar">
			<div className="connection-tools">
				<a className="Phonebox" href="tel:+972522222757">
					<img
						className="PhoneLogo"
						src={PhonecallLogo}
						alt="PhoneLogo"
					/>
					<h1 className="contact">לחץ כאן לשיחה קולית</h1>
				</a>
				<a
					className="whatsappbox"
					href="https://api.whatsapp.com/send?phone=972522222757"
				>
					<img
						src={WhatsappLogo}
						className="WhatsappLogo"
						alt="WhatsappLogo"
					/>
					<h1 className="contact">לחץ כאן לשיחת ואטספ</h1>
				</a>
			</div>
		</div>
	);
}
