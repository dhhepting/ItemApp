
import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { getItemsByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const ItemList = ({ items }) => (
  <ul className="todo-list">
    {items && items.length
      ? items.map((item, index) => {
          return <Item key={`item-${item.id}`} item={item} />;
        })
      : "No items!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const items = getItemsByVisibilityFilter(state, visibilityFilter);
  return { items };
};

// export default ItemList;
export default connect(mapStateToProps)(ItemList);

