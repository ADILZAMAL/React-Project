import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Subtotal from "./components/Subtotal";
import PickupSaving from "./components/PickupSaving";
import Tax from "./components/Taxes";
import EstimatedTotal from "./components/Estimated";
import ItemDetails from "./components/ItermDetails";
import PromoCode from "./components/PromoCode";
import { useEffect } from "react";
function App() {
  const [price, setPrice] = useState(100);
  const [saving, setSaving] = useState(3.85);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTax((price - saving) * 0.0875);
  }, [price]);
  useEffect(() => {
    setTotal(price - saving + tax);
  }, [tax]);
  const applyPromo = () => {
    setPrice(price - price / 10);
  };
  return (
    <div className="app">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col className="purchase-card" md={4}>
            <Subtotal price={price.toFixed(2)} />
            <PickupSaving saving={saving} />
            <Tax tax={tax.toFixed(2)} />
            <hr />
            <EstimatedTotal total={total.toFixed(2)} />
            <ItemDetails
              price={(price - saving).toFixed(2)}
              fullPrice={price}
            />
            <hr />
            <PromoCode applyPromo={applyPromo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
