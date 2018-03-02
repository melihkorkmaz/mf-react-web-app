import React from 'react';
import { Link } from 'react-router';
import { Button } from '../../../react-ui';

const OrderNow = () => {
    return (
        <div className="col-md-5 col-sm-6 col-xs-7 header-order">
                <Button renderAs='router-link' to="/menu" shadow="false" icon="fa-shopping-basket" color="primary">
                    ORDER ONLINE
                </Button>
                <p style={{fontSize: "14px", fontWeight: 600, marginTop: "5px"}}></p>
        </div>
    )
}

export default OrderNow;