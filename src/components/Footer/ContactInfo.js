import React from 'react';


const ContactInfo = ({ restaurant }) => {

    const restaurantPhone = () => {
        if (restaurant.phone)
            return (
                <a  href={`tel:${restaurant.phone}`}  title={restaurant.phone}>
                    {restaurant.phone}
                </a>
            )
        else
            return;
    }

    const alternatePhone = () => {
        if (restaurant.phoneAlternate)
            return (
                <a  href={`tel:${restaurant.phoneAlternate}`}  title={restaurant.phoneAlternate}> / {restaurant.phoneAlternate}</a>
            )
        else
            return;
    }

    return (
        <aside className="col-md-4 col-sm-6 col-xs-12 ftr-widget contact-widget">
            <h3>Contact Info</h3>
            <div className="contact-info">
                <p><span>Address:</span>{restaurant.address.googleFormatted}</p>
                <p><span>Phone no:</span>
                    {restaurantPhone()}
                    {alternatePhone()}
                </p>
            </div>
        </aside>
    )
}

export default ContactInfo;