import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ title: string; itemsID: string }> = ({
  title,
  itemsID
}) => {
  return (
    <div className="shop-items-category-header">
      <h2 className="shop-items-category-header__title">{title}</h2>
      <Link to={`/shop/${itemsID}`}>
        <h4 className="shop-items-category-header__subtitle">
          See more{' '}
          <span className="shop-items-category-header__gt">&gt;&gt; </span>
        </h4>
      </Link>
    </div>
  );
};

export default Header;
