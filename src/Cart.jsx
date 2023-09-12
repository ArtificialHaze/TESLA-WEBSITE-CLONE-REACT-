import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "./cartItems";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const handleBuyEverything = () => {
    toast.success("All items have been purchased and are on the way!");
    setCartItems([]);
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((cartItem) => cartItem.id !== id));
  };

  const CartList = (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleBuyEverything}>Buy Everything</button>
    </>
  );

  const NoItemsInCart = <div>There are no items in the cart.</div>;

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        {cartItems.length > 0 ? CartList : NoItemsInCart}
      </div>
    </div>
  );
};

export default Cart;
