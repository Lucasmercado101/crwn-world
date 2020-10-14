import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import './shop.sass';
import AllItems from './allItems';
import ItemsCategory from './itemsCategory';

const Shop = () => {
  let { url } = useRouteMatch();
  let itemMatch = useRouteMatch<{ itemsID: string }>(`${url}/:itemsID`);

  return (
    <div className="shop">
      {itemMatch ? (
        <ItemsCategory itemID={itemMatch.params.itemsID} />
      ) : (
        <AllItems />
      )}
    </div>
  );
};

export default Shop;
