import React, { memo } from "react";
import TicketRouteLine from "./TicketRouteLine.jsx";

export default memo(function Ticket({ tiketFromAPI }) {
  const { price, carrier, segments } = tiketFromAPI;
  return (
    <div className="tikets-display__ticket ticket w-100 box-border bg">
      <div className="ticket__price-company  d-flex aling-it-cnt jus-cont-sp-bt w-100">
        <div className="price font-w-600 d-flex aling-it-cnt color-success">
          {price}
        </div>
        <div className="company-icon">
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      {segments.map((seg, i) => (
        <TicketRouteLine
          key={seg.date + seg.duration}
          departureDate={seg.date}
          route={`${seg.origin} - ${seg.destination}`}
          duration={seg.duration}
          stops={seg.stops}
        />
      ))}
    </div>
  );
});
