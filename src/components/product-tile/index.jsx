import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";
const productsTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveTFromCart() {
    console.log("removed");
    dispatch(removeFromCart(product.id));
  }
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p4 h-[360x] mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>

        <div className="flex item-center justify-between w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveTFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-while border-2 rounded-lg font-bold p-4 "
          >
            {cart.some((item) => item.id === product.id)
              ? "remove from cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default productsTile;
