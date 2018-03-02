import React from 'react';


const Logo = ({ restaurant }) => {
    return (
        <aside className="col-md-2 col-sm-12 col-xs-12 ftr-widget about-widget">
            <a className="navbar-brand" href="index.html" title="Logo">
                <img alt="logo" src={restaurant.appStyle.logoUrl} />
            </a>
        </aside>
    )
}

export default Logo;