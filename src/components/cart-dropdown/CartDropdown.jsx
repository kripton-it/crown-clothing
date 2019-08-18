import React from 'react';

import './CartВropdown.styles.scss'

import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;