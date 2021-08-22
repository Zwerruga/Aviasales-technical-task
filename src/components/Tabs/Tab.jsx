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
    <div className="tabs__button radio-btns d-flex aling-it-cnt jus-cont-cnt font-w-600 color-text-main box-border w-100 h-100">
      <input
        id={id}
        type="radio"
        value={value}
        className="radio-btns__input"
        checked={curChecked === value}
        onChange={onChange}
      />
      <label
        className="radio-btns__label d-flex aling-it-cnt jus-cont-cnt w-100 h-100"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
});
