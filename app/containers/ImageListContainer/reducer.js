/*
 *
 * AirportList reducer
 *
 */
import produce from 'immer';
import {
  LOAD_IMAGES_REQUEST,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAILURE,
  LOAD_IMAGES_FULFILL,
  SCROLL_IMAGE_LIST,
} from './constants';

export const initialState = {
  loading: false,
  scrollOffset: 0,
};

/* eslint-disable default-case, no-param-reassign */
const imageListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_IMAGES_REQUEST: {
        draft.loading = true;
        break;
      }
      case LOAD_IMAGES_SUCCESS: {
        draft.success = true;
        draft.failure = false;
        draft.images = action.payload.images;
        break;
      }
      case LOAD_IMAGES_FAILURE: {
        draft.success = false;
        draft.failure = true;
        break;
      }
      case LOAD_IMAGES_FULFILL: {
        draft.loading = false;
        break;
      }
      case SCROLL_IMAGE_LIST: {
        draft.scrollOffset = action.payload.scrollOffset;
        break;
      }
    }
  });

export default imageListReducer;
