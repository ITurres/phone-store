import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = (cartItem) => {
  return (
    <article className="cart-item">
      <img src={cartItem.img} alt={cartItem.title} />
      <div>
        <h4>{cartItem.title}</h4>
        <h4 className="item-price">${cartItem.price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{cartItem.amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
