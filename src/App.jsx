import React, { useState, useEffect, createContext } from "react";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

export const ShopContext = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function getData() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json.products || []));
  }

  useEffect(() => {
    getData();
  }, []);

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  const value = { data, cartItems, addToCart };

  return (
     <ShopContext.Provider value={value}>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Simple E-Commerce
          </h1>
          <div className="flex">
            {/* <ProductList data={data} addToCart={addToCart} /> */}
            <ProductList />
            {/* <CartList cartItems={cartItems} /> */}
            <CartList />
          </div>
        </div>
     </ShopContext.Provider>
  );
}
