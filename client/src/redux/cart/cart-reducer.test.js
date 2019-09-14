import CartActionTypes from "./cart-action-types";

import cartReducer from "./cart-reducer";

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE
} = CartActionTypes;

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

describe("cartReducer:", () => {
  const initialState = {
    hidden: true,
    cartItems: []
  };

  it("should return the initial state", () => {
    const newState = cartReducer();
    expect(newState.hidden).toEqual(initialState.hidden);
    expect(newState.cartItems).toEqual(initialState.cartItems);
  });

  it("should handle TOGGLE_CART_HIDDEN", () => {
    const newState = cartReducer(initialState, {
      type: TOGGLE_CART_HIDDEN
    });
    expect(newState.hidden).toEqual(!initialState.hidden);
    expect(newState.cartItems).toEqual(initialState.cartItems);
  });

  describe("should handle ADD_ITEM", () => {
    it("should add new item to empty cart", () => {
      const newState = cartReducer(initialState, {
        type: ADD_ITEM,
        payload: item1
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems[0].id).toEqual(item1.id);
      expect(newState.cartItems[0].quantity).toBe(1);
    });

    it("should add an existing item to cart", () => {
      const initialState = {
        hidden: true,
        cartItems: [
          {
            id: 1,
            name: "hat",
            price: 100,
            quantity: 1
          }
        ]
      };
      const newState = cartReducer(initialState, {
        type: ADD_ITEM,
        payload: item1
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(initialState.cartItems.length);
      expect(newState.cartItems[0].id).toEqual(item1.id);
      expect(newState.cartItems[0].quantity).toBe(2);
    });

    it("should add new item to cart", () => {
      const initialState = {
        hidden: true,
        cartItems: [
          {
            id: 1,
            name: "hat",
            price: 100,
            quantity: 1
          }
        ]
      };
      const newState = cartReducer(initialState, {
        type: ADD_ITEM,
        payload: item2
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(
        initialState.cartItems.length + 1
      );
      expect(newState.cartItems[1].id).toEqual(item2.id);
      expect(newState.cartItems[0].quantity).toBe(1);
      expect(newState.cartItems[1].quantity).toBe(1);
    });
  });

  describe("should handle REMOVE_ITEM", () => {
    it("should remove an item from cart", () => {
      const initialState = {
        hidden: true,
        cartItems: [
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
        ]
      };
      const newState = cartReducer(initialState, {
        type: REMOVE_ITEM,
        payload: item1
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(
        initialState.cartItems.length - 1
      );
      expect(newState.cartItems.includes(item => item.id === item1.id)).toBe(
        false
      );
    });
  });

  describe("should handle DECREASE_AMOUNT", () => {
    it("should decrease amount of an item in the cart, if the quantity > 1", () => {
      const initialState = {
        hidden: true,
        cartItems: [
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
        ]
      };
      const item1 = {
        id: 1,
        name: "hat",
        price: 100,
        quantity: 2
      };
      const newState = cartReducer(initialState, {
        type: DECREASE_AMOUNT,
        payload: item1
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(initialState.cartItems.length);
      expect(newState.cartItems[0].quantity).toEqual(
        initialState.cartItems[0].quantity - 1
      );
    });

    it("should remove item from cart, if the quantity = 1", () => {
      const initialState = {
        hidden: true,
        cartItems: [
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
        ]
      };
      const item2 = {
        id: 2,
        name: "jacket",
        price: 200,
        quantity: 1
      };
      const newState = cartReducer(initialState, {
        type: DECREASE_AMOUNT,
        payload: item2
      });

      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(
        initialState.cartItems.length - 1
      );
      expect(newState.cartItems.includes(item => item.id === item2.id)).toBe(
        false
      );
    });
  });

  describe("should handle CLEAR_CART", () => {
    it("should clear cart", () => {
      const initialState = {
        hidden: true,
        cartItems: [
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
        ]
      };
      const newState = cartReducer(initialState, {
        type: CLEAR_CART
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toBe(0);
    });
  });

  describe("should handle SET_CART_FROM_FIREBASE", () => {
    it("should set cart from firebase", () => {
      const cartItems = [
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
      const newState = cartReducer(initialState, {
        type: SET_CART_FROM_FIREBASE,
        payload: cartItems
      });
      expect(newState.hidden).toEqual(initialState.hidden);
      expect(newState.cartItems.length).toEqual(cartItems.length);
      newState.cartItems.forEach((item, idx) =>
        expect(item.id).toEqual(cartItems[idx].id)
      );
    });
  });
});
