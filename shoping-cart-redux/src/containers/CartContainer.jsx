import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
export default function CartContainer() {
  const isLoading = useSelector((state) => state.product.isLoading);
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div>   ``
      {cartItems.map((item) => (
        <CartProduct product={item} />
      ))}
    </div>
  );
}
