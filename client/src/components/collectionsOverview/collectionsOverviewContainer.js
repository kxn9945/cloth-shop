import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shopSelector'
import WithSpinner from '../withSpinner/withSpinner.js';
import CollectionsOverview from './collectionsOverview';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

//connect(mapStateToProps)(WithSpinner(CollectionsOverview))
export default CollectionsOverviewContainer;
