import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { CharactersTypes } from './characters/types';
import { load } from './characters/sagas';

export default function* rootSaga() {
  return yield all([
    takeEvery(CharactersTypes.LOAD_REQUEST, load),
  ]);
}
