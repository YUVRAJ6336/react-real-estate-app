import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating,address }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        address:address,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p><strong>{title}</strong></p>
        <p>{address}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <small>/Month</small>
        </p>
        
      </div>
      <button onClick={addToBasket}>Buy/Rent</button>
    </div>
  );
}

export default Product;
