import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import RegistrationPage from "./pages/registration-page/RegistationPage";
import Header from "./components/header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUserAction } from "./redux/user/user-actions";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
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
          }); */
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
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // const { currentUser } = this.state;
    return (
      <div>
        {/* <Header currentUser={currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={RegistrationPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
