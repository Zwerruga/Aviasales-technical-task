import React, { memo } from "react";
import { useSelector } from "react-redux";
import Ticket from "./Ticket.jsx";
import "./ticket.css";

export default memo(function TicketsDisplay() {
  const { filtredTickets } = useSelector((s) => s);

  return (
    <div className="tikets-display">
      {filtredTickets.slice(0, 5).map((t, i) => (
        <Ticket key={t.price + i} tiketFromAPI={t} />
      ))}
    </div>
  );
});
