import React from 'react'
import './Connection.css';
import PhonecallLogo from '../../fontsAndIcons/phone-square-alt-solid.png';
import WhatsappLogo from '../../fontsAndIcons/whatsapp-square-brands.png';
export default function Connection() {
    return (
        <div className="miniNavbar">
            <div className="connection-tools">
                <a href="tel:+972522222757"> 
                    <img className="PhoneLogo" src={PhonecallLogo} alt="PhoneLogo"/>  
                </a>
                <a href="https://api.whatsapp.com/send?phone=972522222757"> 
                    <img src={WhatsappLogo} className="WhatsappLogo" alt="WhatsappLogo"/>    
                </a>
            </div>
            <h1 className="contact">שיחת יעוץ בחינם</h1>
        </div>
    )
}
