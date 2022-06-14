import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const store = configureStore({ reducer });

export default store;
