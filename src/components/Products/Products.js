import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  // console.log(props.product.id);
  const { id, img, name, price, ratings, seller } = props.product;

  return (
    <div className='product-info'>
      <div className='product-info2'>
        <img src={img} alt='' />
        <div className='product-dec'>
          <p className='products-name'>{name}</p>
          <p className='product-price'>Price : {price}</p>
          <p className='product-manufac'>
            <small>Manufacturer : {seller}</small>
          </p>
          <p className='product-rating'>
            <small>Ratting : {ratings}</small>
          </p>
        </div>
      </div>
      <button onClick={() => props.handelAddToCart(id)} className='btn-cart'>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Products;
