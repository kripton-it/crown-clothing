import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import Header from './components/header/Header'

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={RegistrationPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
