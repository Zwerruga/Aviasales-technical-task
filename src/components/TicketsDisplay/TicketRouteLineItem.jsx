import React, { memo } from "react";

export default memo(function TicketRouteLineItem({ upper = "", lower = "" }) {
  return (
    <div className="route-line__item w-100">
      <div className="route-line__item-upper d-flex aling-it-cnt font-w-600 color-light">
        {upper}
      </div>
      <div className="route-line__item-lower d-flex aling-it-cnt font-w-600 color-text-main">
        {lower}
      </div>
    </div>
  );
});
