import { VISIBILITY_FILTERS } from "../constants";

export const getItemsState = store => store.items;

export const getItemList = store =>
  getItemsState(store) ? getItemsState(store).allIds : [];

export const getItemById = (store, id) =>
  getItemsState(store) ? { ...getItemsState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getItems = store =>
  getItemList(store).map(id => getItemById(store, id));

export const getItemsByVisibilityFilter = (store, visibilityFilter) => {
  const allItems = getItems(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allItems.filter(item => item.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allItems.filter(item => !item.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allItems;
  }
};

