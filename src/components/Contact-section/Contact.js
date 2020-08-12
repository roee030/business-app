import React from 'react';
import './Contact.css';
export default function Contact() {
	return (
		<div className="contact-wrapper" id="contact">
			<div className="contact-header">צרו קשר</div>
			<div className="info-wrapper">
				<div className="location__info">
					<i class="fas fa-map-marker-alt"></i>
					<div className="contact-text">
						מיקום: אלישיב, עמק חפר ישראל.
					</div>
				</div>
				<div className="contact-text">
					זיו 0541234567 דולב 0541234567
				</div>
				<div className="contact-text my-linkedin">
					© 2020 by Roee Angel. for contact{' '}
					<a href="https://www.linkedin.com/in/roee-angel-3b5b6913a/">
						Linkedin
					</a>
				</div>
			</div>
		</div>
	);
}
