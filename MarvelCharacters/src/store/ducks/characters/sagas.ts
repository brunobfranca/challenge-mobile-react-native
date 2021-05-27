import { compose } from 'redux';
import { call, put, fork } from 'redux-saga/effects';
import api from '../../../services/api'
import { getCharacters } from '../../../config/ActionsDb'

import { loadSuccess } from './actions';

export function* load() {
  try {
    const response = yield call(getCharacters)
    yield put(loadSuccess(response))
  } catch (error) {
    console.log(error)
  }
}
