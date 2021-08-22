import React, { memo } from "react";

export default memo(function TicketRouteLineItem({ upper = "", lower = "" }) {
  return (
    <div className="route-line__item">
      <div className="route-line__item-upper">{upper}</div>
      <div className="route-line__item-lower">{lower}</div>
    </div>
  );
});
