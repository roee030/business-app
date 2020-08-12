import React from 'react';
import './Services.css';
import electricity from '../../fontsAndIcons/bolt-solid.svg';
import Contact from '../Contact-popup/Contact_popup';
import house from '../../fontsAndIcons/laptop-house-solid.svg';
import camera from '../../fontsAndIcons/eye-solid.svg';
import alarm from '../../fontsAndIcons/bell-solid.svg';
import network from '../../fontsAndIcons/wifi-solid.svg';
import summary from '../../fontsAndIcons/summary.png';

export default function Services() {
	return (
		<div className="service_warper" id="services">
			<div className="services-title"> השירותים שלנו</div>
			<div className="services-warper">
				<div className="service service0">
					<img className="service-img" src={electricity}></img>
					<h1 className="service-title"> חשמל </h1>
					<h3> החל מקריאות שירות ועד בניה, שיפוצים ותוספות. </h3>
				</div>

				<div className="service service1">
					<img className="service-img" src={house}></img>
					<h1 className="service-title"> חשמל חכם </h1>
					<h3>
						{' '}
						אנו עובדים עם תקן KNX, תקן אירופאי, חשמל חכם קווי ואמין.
						<br />
						מתקינים, מתכנתים ומוכרים ציוד חכם.{' '}
					</h3>
				</div>

				<div className="service service2">
					<img className="service-img" src={camera}></img>
					<h1 className="service-title"> מצלמות </h1>
					<h3>
						{' '}
						עם המערכות שאנו מתקינים, ניתן לקבל תמונה מלאה של כל היקף
						הבית, שליטה מהנייד, וגם לשמוע ולדבר דרך המצלמות לפי
						הצורך.{' '}
					</h3>
				</div>

				<div className="service service3">
					<img className="service-img" src={alarm}></img>
					<h1 className="service-title"> אזעקות </h1>
					<h3>
						{' '}
						מכוונים את המערכת כך שהבית עובד בשבילך ולא אתה בשבילו.
						בעזרת תכנון נכון ניתן לדעת בדיוק מה קורה בבית. אפשר גם
						לסנן חיות שמסתובבות בבית כגון כלבים או חתולים.{' '}
					</h3>
				</div>

				<div className="service service4">
					<img className="service-img" src={network}></img>
					<h1 className="service-title"> רשת </h1>
					<h3>
						{' '}
						הכל מתחיל ונגמר ברשת טובה בבית. אנו דואגים לכיסוי רשת
						איכותית ומלאה בכל הבית ובחוץ.{' '}
					</h3>
				</div>

				<div className="service service5">
					<img className="service-img" src={summary}></img>
					<h1 className="service-title"> סיכום </h1>
					<h3>
						{' '}
						אצל זיו ודולב ניתן לקבל מענה עבור כל ההיבט החשמלי בבית.{' '}
					</h3>
				</div>
			</div>
		</div>
	);
}
