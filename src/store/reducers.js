import { combineReducers } from 'redux';
import locationReducer from './location';
import restaurantReducer from './restaurant.reducer';
import userBasketReducer from './userBasket.reducer';
import userReducer from './user.reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    restaurant: restaurantReducer,
    userBasket : userBasketReducer,
    user : userReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
