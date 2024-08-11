import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(totalCart);
  return (
    <>
      {cart && cart.length ? (
        <div></div>
      ) : (
        <div className="min-h-[80vh] flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-while border-2 rounded-lg font-bold p-4 "></button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
