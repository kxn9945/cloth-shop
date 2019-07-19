import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cartSelector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cartAction';

import './cartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.length ?
      (cartItems.map(cartItem => (<CartItem key={CartItem.id} item={cartItem} />)))
      : (<span className='empty-message'>Your cart is empty</span>)
    }
    <CustomButton onClick={() => {history.push('/checkout');
  dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
