import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart';
import CartDropdown from '../cartDropdown/cartDropdown';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelector';
import {selectCurrentUser} from '../../redux/user/userSelector';
import {HeaderContainer, LogoContainer,OptionContainer,OptionDiv,OptionLink} from './header.jsx';
import {signOutStart} from '../../redux/user/userAction';

const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
    <Logo className='logo' />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ? <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
         :
         <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionContainer>
    {
      hidden ? null : <CartDropdown />
    }

  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
