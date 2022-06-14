import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './reducers/productReducers';

const reducer = combineReducers({ productList: productListReducer });

const store = configureStore({ reducer });

export default store;
