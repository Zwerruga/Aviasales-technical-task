import React, { memo } from "react";
import moment from "moment";
import TicketRouteLineItem from "./TicketRouteLineItem.jsx";

export default memo(function TicketRouteLine({
  departureDate = "",
  route = "",
  duration = "",
  stops = [],
}) {
  const departueTime = moment(departureDate).format("hh:mm");
  const arrivalTime = moment(departureDate)
    .add(+duration, "minutes")
    .format("hh:mm");
  const arrivalDuration = `${parseInt(duration / 60)}ч ${moment()
    .minutes(duration)
    .format("mm")}м`;

  return (
    <div className="route-line">
      <TicketRouteLineItem
        upper={route}
        lower={`${departueTime}-${arrivalTime}`}
      />
      <TicketRouteLineItem upper={"В пути"} lower={arrivalDuration} />
      <TicketRouteLineItem
        upper={
          !stops.length
            ? "Без пересадок"
            : stops.length === 1
            ? "1 пересадка"
            : `${stops.length} пересадки`
        }
        lower={stops.join(", ") || <div>&nbsp;</div>}
      />
    </div>
  );
});
