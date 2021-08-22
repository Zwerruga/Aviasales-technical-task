import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  SORT_BY_PRICE,
  SORT_BY_SPEED,
  SORT_BY_OPTIMAL,
} from "../../redux/TicketsAction.js";
import Tab from "./Tab.jsx";
import "./tabs.css";

export default memo(function Tabs() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState("price");
  const handleChange = (e) => {
    setChecked(e.target.value);
  };
  return (
    <div className="tabs">
      <Tab
        label="Самый дешевый"
        curChecked={checked}
        value="price"
        onChange={(e) => {
          dispatch(SORT_BY_PRICE());
          handleChange(e);
        }}
      />
      <Tab
        label="Самый быстрый"
        curChecked={checked}
        value="speed"
        onChange={(e) => {
          dispatch(SORT_BY_SPEED());
          handleChange(e);
        }}
      />
      <Tab
        label="Оптимальный"
        curChecked={checked}
        value="optimal"
        onChange={(e) => {
          dispatch(SORT_BY_OPTIMAL());
          handleChange(e);
        }}
      />
    </div>
  );
});
