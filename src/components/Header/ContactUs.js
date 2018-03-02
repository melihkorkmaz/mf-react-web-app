import React from 'react';


const ContactUs = ({ restaurant }) => {

    const restaurantPhone = () => {
        if (restaurant.phone)
            return (

                <a className="phone" title="Phone" href={`tel:${restaurant.phone}`}>
                    <span>{restaurant.phone}</span>
                </a>
            )
        else
            return;
    }

    const alternatePhone = () => {
        if (restaurant.phoneAlternate)
            return (
                <a className="phone" title="Phone" href={`tel:${restaurant.phoneAlternate}`}> 
                    - <span>{restaurant.phoneAlternate}</span>
                </a>
            )
        else
            return;
    }

    return (
        <div className="col-md-5 col-sm-6 col-xs-5 our-contacts">
            <p>
                <i className="fa fa-phone"></i>
                {restaurantPhone()}
                {alternatePhone()}
            </p>
            <p>
                <i className="fa fa-envelope-o"></i>
                <a href={`mailto:${restaurant.email}`} title={restaurant.email}>
                    {restaurant.email}
                </a>
            </p>
        </div>
    )
}

export default ContactUs;