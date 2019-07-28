import { connect } from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect'

import {selectIsCollectionsLoaded} from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/withSpinner/withSpinner.js';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
