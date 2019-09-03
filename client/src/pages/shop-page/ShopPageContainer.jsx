import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ShopPage from "./ShopPage";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

const ShopPageWithRouter = withRouter(ShopPage);

const ShopPageContainer = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return <ShopPageWithRouter />;
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPageContainer);
