import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Table from "./components/ContactTable";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/configureStore";
import { addContact } from "./store/contact";
import { Provider } from "react-redux";
function App() {
  store.dispatch(
    addContact({
      name: "Adil Zamal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Adil Zamal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Adil Zamal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Adil Zamal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Adil Zamal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  return (
    <div className="app">
      <NavBar />
      <Table />
    </div>
  );
}

export default App;
