import React from 'react';

import Logo from './Logo';
import ContactInfo from './ContactInfo'
import WorkingHours from './WorkingHours'

const Footer = ({ restaurant }) => {
    return (
        <footer className="container-fluid no-padding">
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.702)" }}>
                <div className="section-padding"></div>
                <div className="container">
                    <div className="row">
                        <Logo restaurant={restaurant} />
                         <WorkingHours restaurant={restaurant} />
                        <ContactInfo restaurant={restaurant} />
                    </div>
                    <div className="bottom-footer">
                        <p>© Copyrights {restaurant.name}. All Rights Reserved</p>
                        <div className="terms-policy">
                            <a href="#">Terms &amp; Condtions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;