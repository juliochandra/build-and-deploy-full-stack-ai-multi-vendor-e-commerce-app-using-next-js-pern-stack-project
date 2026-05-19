"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";

const Counter = ({ productId }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ productId }));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ productId }));
  };

  return (
    <div className="inline-flex items-center gap-1 rounded border border-slate-200 px-3 py-1 text-slate-600 max-sm:text-sm sm:gap-3">
      <button onClick={removeFromCartHandler} className="select-none p-1">
        -
      </button>
      <p className="p-1">{cartItems[productId]}</p>
      <button onClick={addToCartHandler} className="select-none p-1">
        +
      </button>
    </div>
  );
};

export default Counter;
