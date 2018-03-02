import React from 'react';
import CreditCard from './CreditCard';
import Tips from './Tips';

const OnlinePayment = ({tip, onTipChange, creditCard, onCreditCardChange, total}) => {
    
    return (
        <div className="row" style={{paddingBottom:"20px"}}>
            <div className="col-12 col-sm-8">
               <CreditCard total={total + tip.value} creditCard={creditCard} onCreditCardChange={onCreditCardChange}/>
            </div>
            <div className="col-12 col-sm-4">
                <Tips total={total} tipModel={tip} onTipChange={onTipChange} />
            </div>
        </div>
    )
}

export default OnlinePayment;