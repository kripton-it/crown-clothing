export const addItemToCart = (items, newItem) => {
  const existingItem = items.find(item => item.id === newItem.id);
  return existingItem
    ? items.map(item =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...items, { ...newItem, quantity: 1 }];
};
