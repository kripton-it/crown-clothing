import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionsList from "./CollectionsList";

import WithSpinner from "../../HOC/with-spinner/with-spinner";

import { selectIsCollectionsFetching } from "../../redux/shop/shop-selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsList);

export default CollectionsListContainer;
