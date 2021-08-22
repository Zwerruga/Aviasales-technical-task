const initialState = {
  allTickets: [],
  filtredTickets: [],
};

const TicketReducer = (store = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_TICKETS":
      return {
        ...store,
        allTickets: action.payload,
        filtredTickets: action.payload,
      };
    case "SORT_BY_PRICE":
      return {
        ...store,
        allTickets: store.allTickets.sort((a, b) => a.price - b.price),
        filtredTickets: store.filtredTickets.sort((a, b) => a.price - b.price),
      };
    case "SORT_BY_SPEED":
      return {
        ...store,
        allTickets: store.allTickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        ),
        filtredTickets: store.filtredTickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        ),
      };
    case "SORT_BY_OPTIMAL":
      return {
        ...store,
        allTickets: store.allTickets.sort(
          (a, b) =>
            a.price / a.segments[0].duration - b.price / b.segments[0].duration
        ),
        filtredTickets: store.filtredTickets.sort(
          (a, b) =>
            a.price / a.segments[0].duration - b.price / b.segments[0].duration
        ),
      };
    case "FILTER_BY_PARAMETERS":
      return {
        ...store,
        filtredTickets: store.allTickets.filter((ticket) => {
          const departueStops = ticket.segments[0].stops.length;
          const arrivalStops = ticket.segments[1].stops.length;
          return action.payload[departueStops] && action.payload[arrivalStops];
        }),
      };
    default:
      return store;
  }
};

export default TicketReducer;
