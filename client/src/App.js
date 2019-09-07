import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home-page/HomePage";
import ShopPageContainer from "./pages/shop-page/ShopPageContainer";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import CheckoutPageContainer from "./pages/checkout-page/CheckoutPageContainer";

import HeaderContainer from "./components/header/HeaderContainer";

import { selectCartItemsCount } from "./redux/cart/cart-selectors";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserStart } from "./redux/user/user-actions";

import { GlobalStyle } from "./global.styles";

const App = ({ currentUser, cartItemsCount, checkUser }) => {
  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <div>
      <GlobalStyle />
      <HeaderContainer />
      <Switch>
        <Route path="/shop" component={ShopPageContainer} />
        <Route
          exact
          path="/checkout"
          render={() =>
            cartItemsCount ? <CheckoutPageContainer /> : <Redirect to="/" />
          }
        />
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
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  checkUser: () => dispatch(checkUserStart())
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
