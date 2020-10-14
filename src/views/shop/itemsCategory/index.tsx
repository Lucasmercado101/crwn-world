import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ShopItem from '../../../components/shopItem';
import { firestore } from '../../../firebase.utils';
import './itemsCategory.sass';

const ItemsCategory: React.FC<{ itemID: string }> = ({ itemID }) => {
  const [data, setData] = useState<any>({});
  let history = useHistory();
  useEffect(() => {
    let _isMounted = true;
    firestore
      .collection('collections')
      .doc(itemID)
      .get()
      .then((i) => {
        if (!_isMounted) return;
        const data = i.data();
        if (data) {
          setData(data);
        } else {
          history.push('/shop');
        }
      });
    return () => {
      _isMounted = false;
    };
  }, [itemID, history]);

  return (
    <div>
      {Object.keys(data).length > 0 ? (
        <>
          <h2
            style={{ marginBottom: '15px' }}
            className="shop-items-category-header__title shop-items-category-header__title--center"
          >
            {data.title}
          </h2>
          <ul className="shop-items-category-specific-category">
            {data.items &&
              data.items.map((item: any, index: number) => {
                return (
                  <li key={index}>
                    <ShopItem data={item} />
                  </li>
                );
              })}
          </ul>
        </>
      ) : (
        <h2
          style={{ marginBottom: '15px' }}
          className="shop-items-category-header__title shop-items-category-header__title--center"
        >
          Loading...
        </h2>
      )}
    </div>
  );
};

export default ItemsCategory;
