import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import CheckoutPageContainer from "./pages/checkout-page/CheckoutPageContainer";

import HeaderContainer from "./components/header/HeaderContainer";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

/* import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "./firebase/firebase.utils"; */

import { setCurrentUserAction } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";
// import { selectCollectionsForPreview } from "./redux/shop/shop-selectors";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // было:
          /* this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });*/
          // стало:
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        // было:
        // this.setState({ currentUser: null });
        // стало:
        setCurrentUser(null);
      }
      /* addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      ); */
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // const { currentUser } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPageContainer} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <RegistrationPage />
            }
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
