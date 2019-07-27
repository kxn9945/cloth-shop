import React, {useEffect} from 'react';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionContainer';
import {connect} from 'react-redux';
import { fetchCollectionsStart} from '../../redux/shop/shopActions';

const ShopPage = ({fetchCollectionsStart, match}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
