import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShopPage from "./ShopPage";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

const ShopPageWithRouter = withRouter(ShopPage);

class ShopPageContainer extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    return <ShopPageWithRouter />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPageContainer);
