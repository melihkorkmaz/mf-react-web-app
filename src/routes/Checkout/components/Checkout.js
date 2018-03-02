import React from 'react';
import Auth from 'utils/auth.service';
import { connect } from 'react-redux';
import { userLogin } from 'store/user.reducer';
import { clearBasket, fallbackCoupon } from 'store/userBasket.reducer';
import UserBasket from 'routes/Menu/components/UserBasket';
import menufieldCommon from 'utils/menufield.common'
import ChooseAddress from './ChooseAddress';
import TimeSelect from './TimeSelect';
import Note from './Note';
import Phone from './Phone';
import Coupon from './Coupon';
import PaymentMethod from './PaymentMethod';
import OnlinePayment from './OnlinePayment';
import moment from 'moment';
import httpProvider from 'utils/http.provider';
import { Button } from '../../../../react-ui';


const WaitingForLogin = () => {
    return <div style={{ minHeight: "600px", paddingTop: "50px", textAlign: "center" }}>Waiting for login</div>
}

class Checkout extends React.Component {

    state = {
        hasError: false,
        error: '',
        carryOrDelivery: "DELIVERY",
        expectedTime: 'NOW',
        scheduled: menufieldCommon.restaurantOpening(this.props.restaurant)(menufieldCommon.nowInTimeZone(this.props.restaurant.timeZone.name)),
        paymentType: "CASH",
        note: '',
        phone: '',
        tip: {
            type: "none",
            value: 0
        },
        creditCard: {
            cardNumber: "",
            nameOnCard: "",
            expirationMonth: "05",
            expirationYear: "18",
            ccv: ""
        },
        succeedVisible: false,
        showRestaurantOpeninAlert: false,
        buttonDisabled : false,
        buttonText : "Order Now"
    }

    componentWillMount() {
        if (!this.props.user && !this.props.location.hash) {
            Auth.login();
        } else {

            this.setState({
                address: this.props.user.addresses[0],
                isRestaurantOpen: false
            })
        }
    }

    componentWillUnmount(){
        this.props.fallbackCoupon();
    }

    selectAddress(address) {
        this.setState({
            address: address
        })
    }

    onChangeExpectedTime(status) {
        if (status === this.state.expectedTime) return;
        this.setState({
            expectedTime: status
        })
    }

    onChangeScheduled(newDate) {
        this.setState({
            scheduled: newDate
        })
    }

    onNoteChange(e) {
        this.setState({
            note: e.target.value
        });
    }
    onPhoneChange(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onPaymentMethodChange(payment) {
        this.setState({
            paymentType: payment
        });
    }

    onTipChange(tip) {
        this.setState({
            tip: tip
        })
    }
    onCreditCardChange(e) {
        this.setState({
            creditCard: {
                ...this.state.creditCard,
                [e.target.name]: e.target.value
            }
        })
    }

    readyToGo() {

        if (this.props.userBasket.items.length === 0) {
            this.setState({
                hasError: true,
                error: "You don't have any item in your basket!"
            });
            return false;
        }

        if (this.state.carryOrDelivery === "DELIVERY" && !this.state.address) {
            this.setState({
                hasError: true,
                error: "You need to select an address for delivery!"
            });
            return false;
        }

        if (this.state.carryOrDelivery === "CARRY_OUT" && (!this.state.phone || this.state.phone.length === 0)) {
            this.setState({
                hasError: true,
                error: "Please add your phone!"
            });
            return false;
        }

        if (this.state.expectedTime === "NOW" && !menufieldCommon.isRestaurantOpen(this.props.restaurant)) {
            this.setState({
                hasError: true,
                error: "Restaurant is not open now. Please schedule for future order!"
            });
            return false;
        }

        if (this.state.expectedTime === "SCHEDULED" && !menufieldCommon.isRestaurantOpenAt(this.props.restaurant)(moment(this.state.scheduled))) {
            this.setState({
                hasError: true,
                error: "Restaurant is not open at your selected date. Please schedule for future order!"
            });
            return false;
        }

        if (this.state.paymentType === "ONLINE" && (this.state.creditCard.cardNumber.length === 0 || this.state.creditCard.nameOnCard.length === 0 || this.state.creditCard.ccv.length === 0)) {
            this.setState({
                hasError: true,
                error: "Please fill your credit card "
            });
            return false;
        }

        this.setState({
            hasError: false,
            error: ''
        });
        return true;
    }

    orderNow() {
        if (!this.readyToGo()) return;
        this.setState({
            buttonDisabled : true,
            buttonText : "Please wait..."
        })
        const { name, email, given_name, family_name, gender, sub } = this.props.user.authDetails;
        const order = {
            restaurantId: this.props.restaurant._id,
            basket: this.props.userBasket,
            address: this.state.address,
            carryOrDelivery: this.state.carryOrDelivery,
            expectedTime: this.state.expectedTime,
            scheduled: this.state.scheduled,
            paymentType: this.state.paymentType,
            note: this.state.note,
            phone: this.state.phone,
            tip: this.state.tip,
            creditCard: this.state.creditCard,
            user: { name, email, given_name, family_name, gender, sub },
            restaurantTimeZone: this.props.restaurant.timeZone.name
        };
        
        httpProvider
            .post('/orders')(order)
            .then(x => x.data)
            .then(x => {
                if(x.status){
                    this.props.clearBasket();
                    this.setState({
                        succeedVisible : true,
                        tip: {
                            type: "none",
                            value: 0
                        },
                        hasError : false,
                        buttonDisabled : false,
                        buttonText : "Order Now"
                    })
                }else{
                    this.setState({
                        succeedVisible: false,
                        hasError : true,
                        error : x.error,
                        buttonDisabled : false,
                        buttonText : "Order Now"
                    });
                }
            });
    }

    render() {

        if (!this.props.user)
            return <WaitingForLogin />
        return <div className="container" style={{paddingTop: "20px", paddingBottom: "20px"}}>
            <div className="row checkout-basket">
                <div className="col-sm-12">
                    <UserBasket showUnitPrice={true} disableMobileSize={true} />
                    <Coupon restaurantId={this.props.restaurant._id} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p className="checkout-type-text">
                        <span>You've select {this.state.carryOrDelivery === "DELIVERY" ? "delivery" : "pick up"} method!</span>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="btn-group col-sm-12" role="group" style={{ marginLeft: "0px" }}>
                    <button
                        onClick={() => { this.setState({ carryOrDelivery: "DELIVERY" }) }}
                        className={`btn col-md-6 btn-lg ${this.state.carryOrDelivery === "DELIVERY" ? "btn-checkout-type-selected" : "btn-checkout-type"}`}>
                        <i aria-hidden="true" className="fa fa-car"></i> Delivery
                </button>

                    <button
                        onClick={() => { this.setState({ carryOrDelivery: "CARRY_OUT" }) }}
                        className={`btn col-md-6 btn-lg ${this.state.carryOrDelivery === "CARRY_OUT" ? "btn-checkout-type-selected" : "btn-checkout-type"}`}>
                        <i aria-hidden="true" className="fa fa-shopping-bag"></i> Carry Out
                </button>
                </div>
            </div>

            <div className="row" style={{ display: this.state.carryOrDelivery === "DELIVERY" ? "block" : "none" }}>
                <div className="col-12">
                    <ChooseAddress addresses={this.props.user.addresses} user={this.props.user.providerId} selectedAddres={this.state.address} selectAddres={this.selectAddress.bind(this)} />
                </div>
            </div>
            <div className="row" style={{ display: this.state.carryOrDelivery === "DELIVERY" ? "none" : "block" }}>
                <div className="col-12">
                    <Phone phone={this.state.phone} onPhoneChange={this.onPhoneChange.bind(this)} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <TimeSelect restaurant={this.props.restaurant} deliveryDuration={this.props.restaurant.deliveryDuration} carryOrDelivery={this.state.carryOrDelivery} expectedTime={this.state.expectedTime} scheduled={this.state.scheduled} onChangeScheduled={this.onChangeScheduled.bind(this)} onChangeExpectedTime={this.onChangeExpectedTime.bind(this)} />
                </div>
                <div className="col-12 col-sm-6">
                    <Note note={this.state.note} onNoteChange={this.onNoteChange.bind(this)} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <PaymentMethod currentMethod={this.state.paymentType} onPaymentMethodChange={this.onPaymentMethodChange.bind(this)} />
                </div>
            </div>

            {this.state.paymentType === "ONLINE" ? <OnlinePayment total={this.props.userBasket.total.grandTotal} onCreditCardChange={this.onCreditCardChange.bind(this)} creditCard={this.state.creditCard} tip={this.state.tip} onTipChange={this.onTipChange.bind(this)} /> : null}

            {(this.state.hasError) ?
                (
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                ) : null
            }

            {(this.state.succeedVisible) ?
                (
                    <div className="alert alert-success">
                        We've got your order. Thank you!
                    </div>
                ) : null
            }


            <div style={{ padding: "20px 0px" }}>
                <Button disabled={this.state.buttonDisabled} className="pull-right" color="success" icon="fa fa-check" onClick={this.orderNow.bind(this)}>{this.state.buttonText}</Button>

                <div className="clearfix"></div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        restaurant: state.restaurant.info,
        userBasket: state.userBasket,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (token, user) => dispatch(userLogin(token, user)),
        clearBasket : () => dispatch(clearBasket()),
        fallbackCoupon : () => dispatch(fallbackCoupon())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);