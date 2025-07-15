import { data } from "react-router";

const removeFromCart = (item) => {
  console.log(item);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = storedCart.filter((cartItem) => cartItem.id !== item.id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
export default removeFromCart;
