import React from "react";
import { shallow } from "enzyme";

import CartDropdown from "./CartDropdown";
import CartItem from '../cart-item/CartItem';

import { toggleCartHiddenAction } from '../../redux/cart/cart-actions';

describe("CartDropdown component", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    }

    mockDispatch = jest.fn()

    const mockProps = {
      history: mockHistory,
      dispatch: mockDispatch,
      cartItems: mockCartItems
    };

    wrapper = shallow(<CartDropdown {...mockProps} />)
  })

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find('CustomButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHiddenAction());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });
})

