import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionPage from "./CollectionPage";

import WithSpinner from "../../HOC/with-spinner/with-spinner";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
