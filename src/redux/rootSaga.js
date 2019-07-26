import {all, call} from 'redux-saga/effects';

import {shopSagas} from './shop/shopSaga';
import {userSaga} from './user/userSaga';
import {cartSagas} from './cart/cartSaga';

export default function* rootSaga() {
  yield all([
    call(shopSagas), call(userSaga), call(cartSagas)
  ])
}
