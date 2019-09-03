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
  // если товара осталось одна штука
  itemToDecreaseAmount.quantity === 1
    ? // то удалить
      items.filter(item => item.id !== itemToDecreaseAmount.id)
    : // иначе - уменьшить количество на 1
      items.map(item =>
        item.id === itemToDecreaseAmount.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
