import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "../components/ProductItem";
import { addToCart } from "../store/cart";
import {
  receiveProducts,
  receiveProductsSuccess,
  receiveProductsFailure,
  buyProduct,
} from "../store/product";
export default function ProductContainer() {
  const isLoading = useSelector((store) => store.product.isLoading);
  const products = useSelector((store) => store.product.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      receiveProducts({
        onSuccess: receiveProductsSuccess.type,
        onFailure: receiveProductsFailure.type,
      })
    );
  }, [dispatch]);

  const addToCartp = (product) => {
    dispatch(buyProduct(product));
    dispatch(addToCart(product));
  };
  return (
    <div>
      {products.map((product) => (
        <ProductItems addToCart={addToCartp} product={product} />
      ))}
    </div>
  );
}
