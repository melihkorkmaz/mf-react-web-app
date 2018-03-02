import React from 'react';

const CASH = 'CASH';
const ONLINE = 'ONLINE'

const PaymentMethod = ({currentMethod, onPaymentMethodChange }) => {
    return (
        <div className="card time-panel">
            <div className="card-header">
                <i aria-hidden="true" className="fa fa-money"></i> Payment Method
        </div>
            <div className="card-body">
                <div className={currentMethod === CASH ? "selected" : ""} onClick={() => onPaymentMethodChange(CASH)}>
                    <div className="radio">
                        <input name="deliverNow" type="radio" value="cash" checked={currentMethod === CASH} onChange={() => onPaymentMethodChange(CASH)} />
                        <span>Cash</span>
                    </div>
                </div>
                <div className={currentMethod === ONLINE ? "selected" : ""} onClick={() => onPaymentMethodChange(ONLINE)}>
                    <div className="radio">
                        <input name="deliverNow" type="radio" value="cash" checked={currentMethod === ONLINE} onChange={() => onPaymentMethodChange(ONLINE)} />
                        <span>Online Credit Card</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentMethod;