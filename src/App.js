import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home-page/HomePage";
import ShopPageContainer from "./pages/shop-page/ShopPageContainer";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import CheckoutPageContainer from "./pages/checkout-page/CheckoutPageContainer";

import HeaderContainer from "./components/header/HeaderContainer";

import { selectCurrentUser } from "./redux/user/user-selectors";

import "./App.css";

class App extends React.Component {
  /* unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } */

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route path="/shop" component={ShopPageContainer} />
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
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
