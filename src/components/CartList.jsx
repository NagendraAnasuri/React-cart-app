import React, { useContext, useMemo } from "react";
import { ShopContext } from "../App";

// export default function CartList({ cartItems }) {
export default function CartList() {
  const { cartItems } = useContext(ShopContext);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  return (
    <div className="w-[30%] p-4">
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
          </div>
        ))
      )}
      <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
    </div>
  );
}
