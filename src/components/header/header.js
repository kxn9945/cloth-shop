import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart';
import CartDropdown from '../cartDropdown/cartDropdown';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelector';
import {selectCurrentUser} from '../../redux/user/userSelector';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link to='/'>
    <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
         :
         <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }

  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);