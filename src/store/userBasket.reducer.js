const INIT_USER_BASKET = 'INIT_USER_BASKET';
const ADD_USER_BASKET = 'ADD_USER_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const CHANGE_BASKET_ITEM = 'CHANGE_BASKET_ITEM';
const APPLY_COUPON = 'APPLY_COUPON';
const CLEAR_BASKET = 'CLEAR_BASKET';
const FALLBACK_COUPON = 'FALLBACK_COUPON';

import menufieldCommon from 'utils/menufield.common';

const initState = {
    items: [],
    coupon : {
        applied : false,
        beforeCouponState : {},
        data : {}
    },
    total: {
        subTotal: 0,
        tax: 0,
        deliveryCharge: 0,
        grandTotal: 0
    }
}

export function initUserBasket() {
    return (dispatch) => {
        const userBasket = localStorage.getItem("user-basket") ? JSON.parse(localStorage.getItem("user-basket")) : undefined;
        dispatch({
            type: INIT_USER_BASKET,
            payload: userBasket || initState
        })
    }
}
export function addUserBasket(item) {
    return {
        type: ADD_USER_BASKET,
        payload: item
    }
}

export function changeBasketItem(item) {
    return {
        type: CHANGE_BASKET_ITEM,
        payload: item
    }
}

export function removeFromBasket(key) {
    return {
        type: REMOVE_FROM_BASKET,
        payload: key
    }
}

export function applyCoupon(newPrice, discount, coupon) {
    return {
        type: APPLY_COUPON,
        payload: {
            subTotal: newPrice,            
            discount: discount,
            data : coupon
        }
    }
}

export function fallbackCoupon(){
    return {
        type : FALLBACK_COUPON
    }
}

export function clearBasket() {
    return {
        type: CLEAR_BASKET
    }
}


function fallback(state){
    return state.coupon.applied 
            ? JSON.parse(JSON.stringify(state.coupon.beforeCouponState)) : state;
}

export default function userBasketReducer(state = initState, action) {
    state = fallback(state);

    switch (action.type) {
        case INIT_USER_BASKET:
            return Object.assign({}, state, action.payload);
        case ADD_USER_BASKET:
            const newState = Object.assign({}, state, {
                total: {
                    ...state.total,
                    subTotal: state.total.subTotal + action.payload.totalPrice,
                    tax: state.total.tax + action.payload.tax,
                    grandTotal: state.total.grandTotal + action.payload.totalPrice + action.payload.tax
                },
                items: [action.payload, ...state.items]
            });
            localStorage.setItem("user-basket", JSON.stringify(newState));
            return newState;
        case CHANGE_BASKET_ITEM:
            const items = [...state.items.filter(x => x.uniqueKey !== action.payload.uniqueKey), Object.assign({}, action.payload)];
            let total = Object.assign({}, state.total, {
                subTotal: items.reduce((acc, c) => {
                    return acc + c.totalPrice
                }, 0),
                tax: items.reduce((acc, c) => {
                    return acc + c.tax
                }, 0)
            })
            total.grandTotal = total.subTotal + total.tax;

            const newStateC = {
                total,
                items,
                coupon : state.coupon
            };
            localStorage.setItem("user-basket", JSON.stringify(newStateC));
            return newStateC;
        case REMOVE_FROM_BASKET:
            const basketItems = [...state.items.filter(x => x.uniqueKey !== action.payload)];
            let basketTotal = Object.assign({}, state.total, {
                subTotal: basketItems.reduce((acc, c) => {
                    return acc + c.totalPrice
                }, 0),
                tax: basketItems.reduce((acc, c) => {
                    return acc + c.tax
                }, 0)
            });
            basketTotal.grandTotal = basketTotal.subTotal + basketTotal.tax;

            const newStateR = {
                total: basketTotal,
                items: basketItems,
                coupon : state.coupon
            };

            localStorage.setItem("user-basket", JSON.stringify(newStateR));
            return newStateR;
        case APPLY_COUPON:
            let totalForCoupon = Object.assign({}, state.total, { subTotal : action.payload.subTotal });
            totalForCoupon.grandTotal = totalForCoupon.subTotal + totalForCoupon.tax;

            let newStateForCoupon = Object.assign({}, state, {
                total : totalForCoupon,
                coupon: {
                    applied : true,
                    beforeCouponState : JSON.parse(JSON.stringify(state)),
                    data : action.payload.data,
                    discount : action.payload.discount
                }
            });

            return newStateForCoupon;
        case FALLBACK_COUPON:
            return state;
        case CLEAR_BASKET:
            localStorage.removeItem('user-basket');
            return initState;
        default:
            return state;
    }
}