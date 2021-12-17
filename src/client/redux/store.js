/*
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './RootReducer/RootReducer';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;

*/

import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);

