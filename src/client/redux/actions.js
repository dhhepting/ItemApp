
import { ADD_ITEM, TOGGLE_ITEM, SET_FILTER } from "./actionTypes";

let nextItemId = 0;

export const addItem = content => ({
  type: ADD_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
});

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

