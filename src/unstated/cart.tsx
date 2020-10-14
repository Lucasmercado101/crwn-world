import { useState } from 'react';
import { createContainer } from 'unstated-next';

type Item = {
  name: string;
  amount: number;
  price: number;
};

function useCart() {
  const [cart, setCart] = useState<Item[]>([]);

  const removeItem = (name: string) =>
    setCart((prevArr) => prevArr.filter((i) => i.name !== name));

  const addItem = (item: { name: string; price: number }) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex(({ name }) => name === item.name);
      if (itemIndex !== -1) {
        prev[itemIndex].amount++;
        return [...prev];
      } else {
        return [...prev, { name: item.name, price: item.price, amount: 1 }];
      }
    });
  };
  const addOne = (itemName: string) =>
    setCart((prev) => {
      const itemIndex = prev.findIndex(({ name }) => name === itemName);
      prev[itemIndex].amount++;
      return [...prev];
    });

  const removeOne = (itemName: string) =>
    setCart((prev) => {
      const itemIndex = prev.findIndex(({ name }) => name === itemName);
      if (prev[itemIndex].amount > 1) {
        prev[itemIndex].amount--;
        return [...prev];
      } else {
        return prev.filter((i) => i.name !== itemName);
      }
    });

  return { cart, addItem, removeItem, addOne, removeOne };
}

const cart = createContainer(useCart);
export default cart;
