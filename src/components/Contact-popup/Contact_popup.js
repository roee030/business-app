import React from 'react'
import './Contact_popup.css';
import logo from '../../images/manager-photo.jpeg';
import stars from '../../images/5stars.png'; 
export default function Contact_popup() {
    return (
        <div className='contact-warper'>
            <img className="contact-img"src={logo} alt='logo'></img>
            <p className="contact-name">זיו ודולב</p>
            <hr></hr>
            <img className="contact-5star" src={stars} alt='stars'></img>
            <button className="contact-PN" >לחץ כאן לשיחה קולית</button>
            <button className="contact-WA">לחץ כאן לשליחת הודעה ואטספ</button>
        </div>
    )
}
