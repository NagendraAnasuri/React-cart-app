import React, { useContext } from "react";
import { ShopContext } from "../App";
import Product from "./Product";

export default function ProductList() {
  const { data, cartItems, addToCart } = useContext(ShopContext);

  return (
    <div className="w-[70%] border-r-2 flex flex-wrap p-4">
      {data.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        data.map((item) => {
          const isAdded = cartItems.some((cartItem) => cartItem.id === item.id);

          return (
            <div key={item.id} className="border m-2 p-2 w-[250px]">
              <Product
                img={item.thumbnail}
                title={item.title}
                price={item.price}
                addToCart={() => addToCart(item)}
                isAdded={isAdded}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
