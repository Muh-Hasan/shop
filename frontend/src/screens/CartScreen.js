import React from "react";
import { useParams } from "react-router-dom";
const CartScreen = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Cart</div>;
};

export default CartScreen;
