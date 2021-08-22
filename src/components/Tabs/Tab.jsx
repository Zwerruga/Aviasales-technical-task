import React, { memo } from "react";
import { v4 } from "uuid";

export default memo(function Tab({
  curChecked,
  value,
  label = "",
  onChange = () => {},
}) {
  const id = v4();
  return (
    <div className="tabs__button radio-btns">
      <input
        id={id}
        type="radio"
        value={value}
        className="radio-btns__input"
        checked={curChecked === value}
        onChange={onChange}
      />
      <label className="radio-btns__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});
