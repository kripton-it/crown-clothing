import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsList from "../../components/collections-list/CollectionsList";
import CollectionPage from "../collection-page/CollectionPage";

import WithSpinner from "../../HOC/with-spinner/with-spinner";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { updateCollectionsAction } from "../../redux/shop/shop-actions";

const CollectionsListWithSpinner = WithSpinner(CollectionsList);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const BASE_URL =
  "https://firestore.googleapis.com/v1/projects/crown-db-2dc3f/databases/(default)/documents/";

class ShopPage extends Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    /* fetch(`${BASE_URL}collections`)
      .then(resp => resp.json())
      .then(collections => {
        const collectionsMap = convertCollectionsToMap(collections);
        updateCollections(collectionsMap);
        this.setState({
          isLoading: false
        });
      }); */

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({
        isLoading: false
      });
    });

    /* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({
        isLoading: false
      });
    }); */
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsListWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollectionsAction(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
