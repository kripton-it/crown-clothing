import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import Header from "./components/header/Header";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={RegistrationPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
