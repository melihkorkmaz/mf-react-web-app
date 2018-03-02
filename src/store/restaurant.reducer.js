import axios from 'axios';
import config from '../config';


const INIT_RESTAURANT = 'INIT_RESTAURANT';
const INIT_MENU = 'INIT_MENU';


// ------------------------------------
// Actions
// ------------------------------------
export function initRestaurant() {
    return (dispatch) => {
        axios.get(`${config.api}/restaurants/init`)
            .then(res => res.data)
            .then(res => {
                dispatch({
                    type: INIT_RESTAURANT,
                    payload: res.restaurant
                });

                dispatch({
                    type: INIT_MENU,
                    payload: res.menu
                });
            });
    }
}

export function initMenu(restaurant, menuId) {
    return (dispatch) => {
        axios.get(`${config.awsApi}/restaurants/${restaurant}/menu/${menuId}`)
            .then(res => res.data)
            .then(res => {
                dispatch({
                    type: INIT_MENU,
                    payload: res
                })
            });
    }
}

export default function restaurantReducer(state = {}, action) {
    switch (action.type) {
        case INIT_RESTAURANT:
            return Object.assign({}, state, { info: action.payload });
        case INIT_MENU:
            return Object.assign({}, state, { menu: action.payload });
        default:
            return state;
    }
}