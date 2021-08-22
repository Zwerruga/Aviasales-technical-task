import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TicketReducer from "./TicketReducer.js";


const store = createStore(
    TicketReducer,
    applyMiddleware(thunk)
  );

export default store