import React from 'react';
import InputMask from 'react-input-mask';

const CreditCard = ({onCreditCardChange, creditCard, total}) => {
    
    return (
        <div className="card credit-card">
            <div className="card-header">
                <i aria-hidden="true" className="fa fa-credit-card"></i> Card Info
            </div>
            <div className="card-body">
                <div className="form-group row">
                    <label className="col-sm-3 control-label"></label>
                    <div className="col-sm-9">
                        Your Total Payment is : <b>${total.toFixed(2)}</b> with tip.
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 control-label">Name on Card</label>
                    <div className="col-sm-9">
                        <input type="text" name="nameOnCard" className="form-control" placeholder="Card Holder's Name" value={creditCard.nameOnCard} onChange={onCreditCardChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 control-label">Card Number</label>
                    <div className="col-sm-9">
                        <InputMask name="cardNumber" className="form-control" mask="9999 9999 9999 9999" maskChar=" " placeholder="Debit/Credit Card Number" value={creditCard.cardNumber} onChange={onCreditCardChange}  />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 control-label">Expiration Date</label>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-6">
                                <select className="form-control" value={creditCard.expirationMonth} onChange={onCreditCardChange} name="expirationMonth">
                                    <option value="01">Jan (01)</option>
                                    <option value="02">Feb (02)</option>
                                    <option value="03">Mar (03)</option>
                                    <option value="04">Apr (04)</option>
                                    <option value="05">May (05)</option>
                                    <option value="06">June (06)</option>
                                    <option value="07">July (07)</option>
                                    <option value="08">Aug (08)</option>
                                    <option value="09">Sep (09)</option>
                                    <option value="10">Oct (10)</option>
                                    <option value="11">Nov (11)</option>
                                    <option value="12">Dec (12)</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select className="form-control" value={creditCard.expirationYear} onChange={onCreditCardChange} name="expirationYear">
                                    <option value="17">2017</option>
                                    <option value="18">2018</option>
                                    <option value="19">2019</option>
                                    <option value="20">2020</option>
                                    <option value="21">2021</option>
                                    <option value="22">2022</option>
                                    <option value="23">2023</option>
                                    <option value="24">2024</option>
                                    <option value="25">2025</option>
                                    <option value="26">2026</option>
                                    <option value="27">2027</option>
                                    <option value="28">2028</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 control-label">Card CCV</label>
                    <div className="col-sm-9">
                        <input type="text" name="ccv" className="form-control" style={{ width: "120px" }} placeholder="Security Code" value={creditCard.ccv} onChange={onCreditCardChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;