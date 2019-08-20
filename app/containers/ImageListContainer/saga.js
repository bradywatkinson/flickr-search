import { takeLatest, call, put } from 'redux-saga/effects';

import { getImages } from 'apis/flickr';

import {
  loadImagesSuccess,
  loadImagesFailure,
  loadImagesFulfill,
} from './actions';
import { LOAD_IMAGES_REQUEST } from './constants';

export function* loadImagesSaga(action) {
  try {
    const response = yield call(getImages, action.payload.search);
    yield put(loadImagesSuccess(response.items));
  } catch (err) {
    yield put(loadImagesFailure(err));
  } finally {
    yield put(loadImagesFulfill());
  }
}

// Individual exports for testing
export default function* imageListSaga() {
  yield takeLatest(LOAD_IMAGES_REQUEST, loadImagesSaga);
}
