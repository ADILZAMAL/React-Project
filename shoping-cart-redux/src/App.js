import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
function App() {
  const isLoading = useSelector((state) => state.product.isLoading);

  return (
    <div className="app">
      {isLoading && (
        <div className="spinner__cotainer">
          <p>
            Loadding
            <PulseLoader loading={isLoading} />
          </p>
        </div>
      )}

      {
        <>
          <h1>Shopping Cart</h1>
          <hr />
          <ProductContainer />
          <CartContainer />
        </>
      }
    </div>
  );
}

export default App;
