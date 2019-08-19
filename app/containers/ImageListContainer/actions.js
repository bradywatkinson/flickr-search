/*
 *
 * ImageList actions
 *
 */
import serializeError from 'serialize-error';

import {
  LOAD_IMAGES_REQUEST,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_FAILURE,
  LOAD_IMAGES_FULFILL,
  SCROLL_IMAGE_LIST,
} from './constants';

export function loadImagesRequest() {
  return {
    type: LOAD_IMAGES_REQUEST,
  };
}

export function loadImagesSuccess(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    payload: {
      images,
    },
  };
}

export function loadImagesFailure(err) {
  return {
    type: LOAD_IMAGES_FAILURE,
    error: serializeError(err),
  };
}

export function loadImagesFulfill() {
  return {
    type: LOAD_IMAGES_FULFILL,
  };
}

export function scrollImageList(scrollOffset) {
  return {
    type: SCROLL_IMAGE_LIST,
    payload: {
      scrollOffset,
    },
  };
}
