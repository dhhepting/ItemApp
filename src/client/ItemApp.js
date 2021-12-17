import React from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemApp() {
  return (
    <div className="item-app">
      <Header />
      <h1>Item List</h1>
      <AddItem />
      <ItemList />
      <VisibilityFilters />
    </div>
  );
}
