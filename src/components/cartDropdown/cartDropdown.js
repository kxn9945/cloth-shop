import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cartSelector';

import './cartDropdown.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.map(cartItem => (<CartItem key={CartItem.id} item={cartItem} />))
    }
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
