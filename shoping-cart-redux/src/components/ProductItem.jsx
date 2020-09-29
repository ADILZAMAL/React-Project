import React from "react";
import { buyProductById } from "../store/product";

export default function ProductItem(props) {
  const { id, title, price, inventory } = props.product;

  return (
    <div>
      <p>
        {title} - ${price} * {inventory}
      </p>
      <button
        onClick={() => {
          props.addToCart(props.product);
        }}
        disabled={inventory < 1}
      >
        {inventory > 0 ? "Add to cart" : "sold out"}
      </button>
    </div>
  );
}
