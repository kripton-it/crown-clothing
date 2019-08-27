import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShopPage from "./ShopPage";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

const ShopPageWithRouter = withRouter(ShopPage);

class ShopPageContainer extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    return <ShopPageWithRouter />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPageContainer);
