import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleItem } from "../redux/actions";

const Item = ({ item, toggleItem }) => (
  <li className="todo-item" onClick={() => toggleItem(item.id)}>
    {item && item.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "item-item__text",
        item && item.completed && "item-item__text--completed"
      )}
    >
      {item.content}
    </span>
  </li>
);

// export default Item;
export default connect(
  null,
  { toggleItem }
)(Item);

