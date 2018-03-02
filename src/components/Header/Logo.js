import React from 'react';


const Logo = ({restaurant}) => {
    return (
        <div className="col-md-2 col-sm-2 col-xs-12 logo-block">
            <a className="navbar-brand" href="/" title="Logo">
                <img alt="logo" src={restaurant.appStyle.logoUrl} />
            </a>
        </div>
    )
}

export default Logo;