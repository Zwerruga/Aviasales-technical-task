import React, { memo } from "react";
import { v4 } from "uuid";

export default memo(function Checkbox({
  label = "",
  isChecked = true,
  onChange = () => {},
  value = "",
}) {
  const id = v4();
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={onChange}
        value={value}
      />
      <label className="checkbox__label" htmlFor={id}>
        <div className="checkbox__form">
          <div className="checkbox__shape">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
                fill="#2196F3"
              />
            </svg>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
});
