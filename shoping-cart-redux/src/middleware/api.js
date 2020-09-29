//api calling middleware
import getProducts from "../api/shop";
const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== "product/receiveProducts") return next(action);

  next(action);
  setTimeout(() => {
    const products = getProducts();
    dispatch({
      type: action.payload.onSuccess,
      payload: products,
    });
  }, 3000);
};
export default api;
