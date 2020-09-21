import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Table from "./components/ContactTable";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/configureStore";
import { addContact } from "./store/contact";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/AddContact";
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
      name: "Sohail Rana",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Nikhil Kumar",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Rishav Kumar",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  store.dispatch(
    addContact({
      name: "Rohit Bansal",
      email: "adilzamal@gmail.com",
      phone: "8825367148",
    })
  );
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar navbrand="Contact Book" />
            <Table />
          </Route>
          <Route path="/add-contact">
            <AddContact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
