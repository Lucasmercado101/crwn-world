import React, { useEffect, useState } from 'react';
import Header from '../Header';
import ShopItem from '../../../components/shopItem';
import { firestore } from '../../../firebase.utils';

const AllItems: React.FC = () => {
  const [itemsData, setItemsData] = useState<object[]>([]);
  useEffect(() => {
    firestore
      .collection('collections')
      .get()
      .then((i) => {
        const itemsArr = i.docs.map((doc) => {
          let data = doc.data();
          data = { ...data, id: doc.id };
          return data;
        });

        setItemsData(
          itemsArr.map((arr) => {
            let newArr = arr;
            newArr.items = newArr.items.slice(0, 4);
            return newArr;
          })
        );
      });
  }, []);
  return (
    <div>
      {itemsData.length > 0 ? (
        itemsData.map((element: any, i: number) => (
          <div key={i} className="shop-items-category">
            <Header itemsID={element.id} title={element.title.toLowerCase()} />
            <ul className="shop-items-category__items">
              {element.items.map((item: any, i: number) => (
                <ShopItem key={i} data={item} />
              ))}
            </ul>
          </div>
        ))
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

export default AllItems;
