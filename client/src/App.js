import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HeaderContainer from "./components/header/HeaderContainer";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

import { selectCartItemsCount } from "./redux/cart/cart-selectors";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserStart } from "./redux/user/user-actions";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const ShopPage = lazy(() => import("./pages/shop-page/ShopPageContainer"));
const RegistrationPage = lazy(() =>
  import("./pages/registration-page/RegistationPage")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout-page/CheckoutPageContainer")
);

const App = ({ currentUser, cartItemsCount, checkUser }) => {
  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <div>
      <GlobalStyle />
      <HeaderContainer />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/checkout"
              render={() =>
                cartItemsCount ? <CheckoutPage /> : <Redirect to="/" />
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
          </Suspense>
        </ErrorBoundary>
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
