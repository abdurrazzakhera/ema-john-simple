import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handelAddToCart = (id) => {
    console.log(id);
    const newCart = [...cart, id];
    setCart(newCart);
  };
  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Products>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
