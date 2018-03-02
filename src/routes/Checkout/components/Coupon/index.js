import React from 'react';
import { connect } from 'react-redux';
import httpProvider from 'utils/http.provider';
import { applyCoupon } from 'store/userBasket.reducer';

class Coupon extends React.Component {

    constructor() {
        super();
        this.state = {
            code: "",
            fetching: false,
            message: "",
            success: ""
        }
    }

    discount(coupon) {
        return (coupon.options.discountType === "percentage"
            ? (this.props.userBasket.total.subTotal * (coupon.options.discountValue / 100))
            : coupon.options.discountValue);
    }

    applyCoupon(coupon) {
        if (coupon.type === "discount") {

            if (coupon.options.discountType === "standard" && this.props.userBasket.total.subTotal < coupon.options.minPrice) {
                this.setState({
                    message: `You should spend minimum $${coupon.options.minPrice.toFixed(2)} to use this coupon code! Coupon name : ${coupon.name}`
                });
                return;
            }

            let discount = 0;

            if (coupon.options.discountType === "standard") {
                discount = this.discount(coupon);
            } else if (coupon.options.discountType === "product-prop-related") {
                let canApply = false;
                discount = this.discount(coupon);
                let multipleDiscount = this.props.userBasket.items.reduce((prev, currentItem) => {

                    let canUsableForThisItem = false;

                    if (coupon.options.property) {
                        const propKeyName = coupon.options.property.name;

                        if (currentItem.properties[propKeyName])
                            canUsableForThisItem = true;

                    } else {
                        if (coupon.options.products.indexOf(currentItem._id) >= 0)
                            canUsableForThisItem = true;
                    }


                    if (canUsableForThisItem) {
                        canApply = true;
                        return prev + discount;
                    } else
                        return prev;
                }, 0);

                discount = multipleDiscount;

                if (!canApply) {
                    this.setState({
                        message: `You can not use this coupon code! Coupon name : ${coupon.name}`
                    })
                    return false;
                }
            } else if (coupon.options.discountType === "product") {
                const discountItem = this.props.userBasket.items.find(x => x._id === coupon.options.product);

                if (!discountItem) {
                    this.setState({
                        message: `You can not use this coupon code with your selected items. Coupon name : ${coupon.name}`
                    });
                    return;
                } else if (coupon.options.minPrice && this.props.userBasket.total.subTotal < coupon.options.minPrice) {
                    this.setState({
                        message: `You should spend minimum $${coupon.options.minPrice.toFixed(2)} to use this coupon code! Coupon name : ${coupon.name}`
                    });
                    return;
                }

                discount = discountItem.unitPrice;
            }

            const newTotal = this.props.userBasket.total.subTotal - discount;

            this.props.applyCoupon(newTotal, discount, coupon);
            this.setState({
                success: "You've used coupon for : " + coupon.name
            })
        }
    }

    checkCoupon(e) {
        e.preventDefault();
        const restaurantId = this.props.restaurantId;
        const code = this.state.code;

        if (!code || code.length === 0) return;

        this.setState({
            fetching: true
        });

        httpProvider
            .get(`/coupons/check/${restaurantId}/${code}`)
            .then((response) => response.data)
            .then((response) => {

                if (!response.status) {
                    this.setState({
                        fetching: false,
                        message: response.message,
                        code: ""
                    });
                } else {
                    this.setState({
                        fetching: false
                    });

                    this.applyCoupon(response.coupon);
                }
            })
    }

    render() {

        if (this.state.fetching) {
            return <div className="checkout-coupon">Please wait while we are checking your code...</div>
        }


        if (!this.props.userBasket.coupon.applied) {
            return (
                <div className="checkout-coupon">
                    <div className="checkout-coupon-flex">
                        <label>Use Coupon: </label>
                        <div>
                            <form onSubmit={this.checkCoupon.bind(this)} className="input-group">
                                <input type="text" className="form-control" placeholder="Your code here..." value={this.state.code} onChange={(e) => this.setState({ code: e.target.value.toUpperCase() })} />
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="submit">Apply!</button>
                                </span>
                            </form>
                        </div>
                    </div>
                    <span>{this.state.message}</span>
                </div>
            )
        } else if (this.state.status === 1) {
            return <div className="checkout-coupon">Please wait while we are checking your code...</div>
        } else {
            return <div className="checkout-coupon">
                <div style={{ color: "green", width: "100%" }}>{this.state.success} with code {this.props.userBasket.coupon.data.code}!</div>
            </div>
        }


    }
}

const mapStateToProps = (state) => {
    return {
        userBasket: state.userBasket
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        applyCoupon: (newTotal, discount, coupon) => dispatch(applyCoupon(newTotal, discount, coupon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);