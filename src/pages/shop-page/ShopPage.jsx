import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsListContainer from "../../components/collections-list/CollectionListContainer";
import CollectionPageContainer from "../collection-page/CollectionPageContainer";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsListContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
