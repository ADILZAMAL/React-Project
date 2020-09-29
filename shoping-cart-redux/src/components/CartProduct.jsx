import React from "react";

export default function CartProduct(props) {
  const { title, price, count } = props.product;
  return (
    <div>
      <p>
        {title} - ${price} * {count}
      </p>
    </div>
  );
}
