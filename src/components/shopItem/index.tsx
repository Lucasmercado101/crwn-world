import React from 'react';
import './shopItem.sass';
import Cart from '../../unstated/cart';

const ShopItem: React.FC<{
  data: { imageUrl: string; name: string; price: number };
}> = ({ data }) => {
  const { addItem } = Cart.useContainer();

  return (
    <div className="shop-item">
      <div className="shop-item-image">
        <img className="shop-item-image__img" src={data.imageUrl} alt="Hat" />
        <button
          onClick={() => addItem({ name: data.name, price: data.price })}
          className="shop-item-image__add-btn"
        >
          add to cart
        </button>
      </div>
      <div className="item-details">
        <p className="item-details__name">{data.name}</p>
        <p className="item-details__price">{data.price}</p>
      </div>
    </div>
  );
};

export default ShopItem;
