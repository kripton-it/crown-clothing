import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionPage from "./CollectionPage";

import WithSpinner from "../../HOC/with-spinner/with-spinner";

import { selectIsCollectionsAbsent } from "../../redux/shop/shop-selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsAbsent
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
