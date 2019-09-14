import { addItemToCart, decreaseItemAmount } from "./cart-utils";

const item1 = {
  id: 1,
  name: "hat",
  price: 100
};

const item2 = {
  id: 2,
  name: "jacket",
  price: 200
};

const initialCartItems = [
  {
    id: 1,
    name: "hat",
    price: 100,
    quantity: 2
  },
  {
    id: 2,
    name: "jacket",
    price: 200,
    quantity: 1
  }
];

let newItems;

it("decreaseItemAmount:", () => {
  const item1 = {
    id: 1,
    name: "hat",
    price: 100,
    quantity: 2
  };
  newItems = decreaseItemAmount(initialCartItems, item1);
  expect(newItems.length).toEqual(initialCartItems.length);
  expect(newItems[0].quantity).toBe(1);
  expect(newItems[1].quantity).toBe(1);
  expect(newItems[0].id).toEqual(item1.id);
  expect(newItems.findIndex(item => item.id === item1.id)).not.toBe(-1);
  const item2 = {
    id: 2,
    name: "jacket",
    price: 200,
    quantity: 1
  };
  newItems = decreaseItemAmount(initialCartItems, item2);
  expect(newItems.findIndex(item => item.id === item2.id)).toBe(-1);
  expect(newItems.length).toEqual(initialCartItems.length - 1);
});
