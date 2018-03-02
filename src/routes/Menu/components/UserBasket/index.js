import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../../react-ui';


import Modal from 'components/Modal';
import { changeBasketItem, removeFromBasket } from 'store/userBasket.reducer'
import BasketItemsTable from './BasketItemsTable';
import { browserHistory } from 'react-router'

class UserBasket extends React.PureComponent {
    
    static defaultProps = {
        disableMobileSize : false
    }

    state = {
        isMobile: this.props.disableMobileSize === false && window.innerWidth <= 767,
        isMobilBasketVisible: false
    }

    componentWillMount() {
        this.setState({
            isMobile: this.props.disableMobileSize === false && window.innerWidth <= 767,
            isMobilBasketVisible: false
        })
    }

    onQuantityChange(item, e) {
        if (!e.target.value) return;

        item.quantity = e.target.value;
        item.totalPrice = item.unitPrice * item.quantity;
        item.tax = item.totalPrice * this.props.restaurant.taxRate / 100;

        this.props.changeBasketItem(item);
    }

    removeItem(item) {
        this.props.removeFromBasket(item.uniqueKey);
    }


    mobileBasketClicked() {
        this.setState({ isMobilBasketVisible: true });
        this.modal.show();
    }

    hideModal() {
        this.modal.hide();
        this.setState({ isMobilBasketVisible: false });
    }


    checkOut() {

    }


    renderMobile() {
        return <div style={{ display: this.props.userBasket.items.length > 0 ? "block" : "none" }}>
            <div className="mobile-basket" onClick={this.mobileBasketClicked.bind(this)} >
                <i className="fa fa-shopping-basket"></i>
                <div className="basket-badge">{this.props.userBasket.items.length}</div>
            </div>
            <Modal ref={(node) => { this.modal = node }} contentStyle={{ padding: "0px" }} hideCloseButton={true}>
                <div className="card user-basket-card">
                    <div className="card-heading">
                        <h3 className="card-title">My Order</h3>
                    </div>
                    <div className="card-body">
                        <BasketItemsTable showUnitPrice={this.props.showUnitPrice} basket={this.props.userBasket} quantityChange={this.onQuantityChange.bind(this)} removeItem={this.removeItem.bind(this)} />
                        <div className="checkout-panel">
                            <div className="btn-group" style={{ width: "100%" }}>
                                <button className="btn btn-secondary btn-block" onClick={this.hideModal.bind(this)}>
                                    CLOSE
                         </button>
                                <button className="btn btn-checkout btn-block" onClick={() => { browserHistory.push('/checkout') }} disabled={this.props.userBasket.items.length <= 0} style={{ margin: "0px" }}>
                                    <i aria-hidden="true" className="fa fa-shopping-basket"></i> CHECK OUT
                         </button>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    }

    renderDesktop() {
        return (
            <div className="card user-basket-card">
                <div className="card-heading">
                    <h3 className="card-title">My Order</h3>
                </div>
                <div className="card-body">
                    <BasketItemsTable showUnitPrice={this.props.showUnitPrice} basket={this.props.userBasket} quantityChange={this.onQuantityChange.bind(this)} removeItem={this.removeItem.bind(this)} />
                    <div className="checkout-panel">
                        <Button color="success" block icon="fa-shopping-basket" onClick={() => { browserHistory.push('/checkout') }} disabled={this.props.userBasket.items.length <= 0}>
                            CHECK OUT
                        </Button>
                        {/* <button className="btn btn-checkout btn-block" onClick={() => { browserHistory.push('/checkout') }} disabled={this.props.userBasket.items.length <= 0}>
                            <i aria-hidden="true" className="fa fa-shopping-basket"></i> CHECK OUT
                        </button> */}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.state.isMobile ? this.renderMobile() : this.renderDesktop();
    }

}

const mapStateToProps = (state) => {
    return {
        userBasket: state.userBasket,
        restaurant: state.restaurant.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeBasketItem: item => dispatch(changeBasketItem(item)),
        removeFromBasket: key => dispatch(removeFromBasket(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBasket)