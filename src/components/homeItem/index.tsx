import React from 'react';
import { Link } from 'react-router-dom';
import './homeItem.sass';

const HomeItem: React.FC<{
  text: string;
  small?: Boolean;
  big?: Boolean;
  image: string;
  to: string;
}> = ({ small, big, image, text, to }) => {
  return (
    <Link
      to={`shop/${to}`}
      className={`home-item ${small && 'home-item--small'} ${
        big && 'home-item--big'
      }`}
    >
      <img className="home-item__image" src={image} alt={text} />
      <div className="home-item-content">
        <h1 className="home-item-content__title">{text}</h1>
        <span className="home-item-content__subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default HomeItem;
