import React from 'react';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionContainer';
import {connect} from 'react-redux';
import { fetchCollectionsStartAsync} from '../../redux/shop/shopActions';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    //SNapshot firebase
    //Observer pattern
    // this.unsubscribeFromSnapshot = collectionRef.onSnapShot(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //Promise
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //fetch
    // fetch('https://firestore.googleapis.com/v1/projects/shop-db/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
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
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
