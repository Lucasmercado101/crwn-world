import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner";
import collectionsOverview from "./collections-overview";

const mapStateToPros = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToPros),
  WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
