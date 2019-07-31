import React, {useEffect, lazy, Suspense} from 'react';
import {GlobalStyle} from './globalStyle.js';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header';
// import {auth, createUserProfileDocument} from './firebase/firebase';
import {connect} from 'react-redux';
// import {setCurrentUser} from './redux/user/userAction';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';
import {checkUserSession} from './redux/user/userAction';
//import {selectCollectionsForPreview} from './redux/shop/shopSelector';

import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/errorBoundary/errorBoundary';

const HomePage = lazy(() => import ('./pages/homepage/homepage'))
const ShopPage = lazy(() => import ('./pages/shop/shop'));
const SignInAndSignUpPage = lazy(() => import ('./pages/sign-in-sign-up/sign-in-sign-up'));
const CheckoutPage = lazy(() => import ('./pages/checkout/checkout'));

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (<div>
    <GlobalStyle/>
    <Header/>
    <Switch>
      <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={HomePage}/>

        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={(
            ) => currentUser
            ? (<Redirect to='/'/>)
            : (<SignInAndSignUpPage/>)}/>
      </Suspense>
      </ErrorBoundary>
    </Switch>
  </div>);

}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser});

// const mapStateToProps =  createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
