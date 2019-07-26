import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './rootReducer';

import {persistStore} from 'redux-persist';

//import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

//import {fetchCollectionsStart} from './shop/shopSaga';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
  middleWares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
