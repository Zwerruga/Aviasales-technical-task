import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_ALL_TICKETS, SORT_BY_PRICE } from "./redux/TicketsAction.js";
import apiCalls from "./redux/apiCalls.js";
import Logo from "./components/Logo.jsx";
import Loading from "./components/Loading.jsx";
import Filter from "./components/Filter/Filter.jsx";
import TicketsDisplay from "./components/TicketsDisplay/TicketsDisplay.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCalls()
      .then((res) => {
        dispatch(SET_ALL_TICKETS(res.tickets));
      })
      .then(() => {
        dispatch(SORT_BY_PRICE());
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => window.location.reload());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="logo">
        <Logo />
      </header>
      <main className="main-container">
        <section className="main-container__left-section">
          <Filter />
        </section>
        <section className="main-container__right-section">
          <Tabs />
          {loading ? <Loading /> : <TicketsDisplay />}
        </section>
      </main>
    </div>
  );
}

export default App;
