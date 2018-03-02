import axios from 'axios'
import config from '../config'


export function userLogin(token, profile) {
    return dispatch => new Promise((resolve, reject) => {
        axios(`${config.api}/users/login`, {
            method: 'POST',
            data: profile,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-source': 'web-app',
                'x-access-token': token
            }
        })
            .then((response) => response.data)
            .then(res => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: res
                });
                resolve();
            }, err => reject(err));
    })
}


export function addAddress(address){
    return {
        type : "ADD_ADDRESS",
        payload : address
    }
}

export function removeAddress(id) {
    return {
        type : "REMOVE_ADDRESS", 
        payload : id
    }
}


export default function userReducer(state = null, action) {
    switch (action.type) {
        case "USER_LOGIN":
            return Object.assign({}, state, action.payload);
        case "ADD_ADDRESS":
            return Object.assign({}, state, { addresses : [ action.payload, ...state.addresses]} )
        case "REMOVE_ADDRESS":
            const address = [...state.addresses];
            const current = address.find(x => x._id === action.payload);
            address.splice(address.indexOf(current), 1);
            return Object.assign({}, state, { addresses : address} )
        default:
            return state;
    }
}