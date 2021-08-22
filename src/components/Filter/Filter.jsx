import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER_BY_PARAMETERS } from "../../redux/TicketsAction.js";
import Checkbox from "./Checkbox.jsx";
import "./filter.css";

export default memo(function Filter() {
  const initialState = {
    0: true,
    1: true,
    2: true,
    3: true,
    all: true,
  };
  const [curFilters, setCurFilters] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const filter = e.target.value;
    if (filter === "all") {
      setCurFilters((state) => {
        const newFilters = state[filter]
          ? { ...state, all: false }
          : initialState;
        dispatch(FILTER_BY_PARAMETERS(newFilters));
        return newFilters;
      });
    } else {
      setCurFilters((state) => {
        const newFilters = state[filter]
          ? { ...state, all: false, [filter]: false }
          : { ...state, [filter]: true };
        dispatch(FILTER_BY_PARAMETERS(newFilters));
        return newFilters;
      });
    }
  };
  return (
    <div className="filter">
      <p className="filter__title">Количество пересадок</p>
      <Checkbox
        label="Все"
        value={"all"}
        isChecked={curFilters.all}
        onChange={handleChange}
      />
      {["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"].map(
        (l, i) => {
          return (
            <Checkbox
              key={l}
              label={l}
              value={i}
              isChecked={curFilters[i]}
              onChange={handleChange}
            />
          );
        }
      )}
    </div>
  );
});
