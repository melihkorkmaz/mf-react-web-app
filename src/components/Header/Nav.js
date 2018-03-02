import React from 'react';
import menufieldCommon from '../../utils/menufield.common';
import { Link } from 'react-router';

const Logo = ({ restaurant }) => {

    let testit = menufieldCommon.orderASC(restaurant.navigation);

    return (
        <nav>
            <div className="container">
                <ul>
                    {/* {menufieldCommon.orderASC(restaurant.navigation).map((item) => {
                        return (
                            <li key={item.route}>
                                <a href={item.route}>{item.name}</a>
                            </li>
                        )
                    })} */}

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/catering">Catering</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/coupons">Coupons</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Logo;