import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsList from "../../components/collections-list/CollectionsList";
import CollectionPage from "../collection-page/CollectionPage";

import WithSpinner from "../../HOC/with-spinner/with-spinner";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop-selectors";

const CollectionsListWithSpinner = WithSpinner(CollectionsList);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsListWithSpinner
              isLoading={isCollectionsFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
