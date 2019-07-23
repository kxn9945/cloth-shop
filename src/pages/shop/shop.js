import React from 'react';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {connect} from 'react-redux';
import { updateCollections} from '../../redux/shop/shopActions';
import WithSpinner from '../../components/withSpinner/withSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    //SNapshot firebase
    //Observer pattern
    // this.unsubscribeFromSnapshot = collectionRef.onSnapShot(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //Promise
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    //fetch
    // fetch('https://firestore.googleapis.com/v1/projects/shop-db/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
