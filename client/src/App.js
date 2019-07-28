import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
// import {auth, createUserProfileDocument} from './firebase/firebase';
import {connect} from 'react-redux';
// import {setCurrentUser} from './redux/user/userAction';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';

import CheckoutPage from './pages/checkout/checkout';
import {checkUserSession} from './redux/user/userAction';
//import {selectCollectionsForPreview} from './redux/shop/shopSelector';

const App = ({checkUserSession, currentUser}) =>{
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (<div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
      </Switch>
    </div>);

}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapStateToProps =  createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
