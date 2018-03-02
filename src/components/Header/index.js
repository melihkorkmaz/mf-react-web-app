import React from 'react';

import ContactUs from './ContactUs';
import Logo from './Logo';
import OrderNow from './OrderNow'
import Nav from './Nav'
import menufieldCommon from 'utils/menufield.common';

const Header = ({ restaurant }) => {

    const Alert = () => {
        return (
            <div className="alert alert-danger" style={{ borderRadius: "0px", borderWidth: "0px 0px 1px 0px", textAlign: "center" }}>
                <b>Attention!</b> Restaurant is offline now. You can order for future.
        </div>
        )
    }

    return (
        <header className="container-fluid no-padding">
            { !menufieldCommon.isRestaurantOpen(restaurant) ? <Alert /> : null}
            <div className="container top-header">
                <div className="row">
                    <ContactUs restaurant={restaurant} />
                    <Logo restaurant={restaurant} />
                    <OrderNow />
                </div>
            </div>
            <Nav restaurant={restaurant} />
        </header>
    )
}

export default Header;