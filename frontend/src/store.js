import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const store = configureStore({ reducer });

export default store;
