export const SET_ALL_TICKETS = (tickets) => (dispatch) => {
  dispatch({ type: "SET_ALL_TICKETS", payload: tickets });
  return;
};
export const SORT_BY_PRICE = () => (dispatch) => {
  dispatch({ type: "SORT_BY_PRICE" });
  return;
};
export const SORT_BY_SPEED = () => (dispatch) => {
  dispatch({ type: "SORT_BY_SPEED" });
  return;
};
export const SORT_BY_OPTIMAL = () => (dispatch) => {
  dispatch({ type: "SORT_BY_OPTIMAL" });
  return;
};
export const FILTER_BY_PARAMETERS = (params) => (dispatch) => {
  dispatch({ type: "FILTER_BY_PARAMETERS", payload: params });
  return;
};
