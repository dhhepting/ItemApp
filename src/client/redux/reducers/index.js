import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import items from "./items";

export default combineReducers({ items, visibilityFilter });
/*
import { combineReducers } from 'redux';
import ListReducer from '../components/List/ListReducer';

export const rootReducer = combineReducers({
    list: ListReducer
})
*/
