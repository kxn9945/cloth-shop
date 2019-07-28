import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shopConstant';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shopActions';

export function* fetchCollectionsAsync() {
  //yield console.log('saga');

  try{
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  }catch(err){
    yield put(fetchCollectionsFailure(err.message));
  }

    //
    // collectionRef
    //   .get()
    //   .then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
