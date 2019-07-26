import React from 'react';
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

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
      // const {setCurrentUser} = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   //this.setState({ currentUser: user });
    //   //createUserProfileDocument(user);
    //   //console.log(user);
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     userRef.onSnapshot(snapShot => {
    //       //console.log(snapShot.data());
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });
    //       })
    //     };
    //
    //   setCurrentUser(userAuth)
      //addCollectionAndDocuments('collections',collectionsArray.map(({title, items}) => ({title,items})));
    // });

    const {checkUserSession} = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (<div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
      </Switch>
    </div>);
  }
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
