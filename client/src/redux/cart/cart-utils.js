// добавление нового товара в список товаров с группировкой одинаковых товаров
export const addItemToCart = (items, newItem) => {
  const existingItem = items.find(item => item.id === newItem.id);
  return existingItem
    ? items.map(item =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...items, { ...newItem, quantity: 1 }];
};

// уменьшение количества товара на 1
export const decreaseItemAmount = (items, itemToDecreaseAmount) =>
  itemToDecreaseAmount.quantity === 1
    ? items.filter(item => item.id !== itemToDecreaseAmount.id)
    : items.map(item =>
        item.id === itemToDecreaseAmount.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
