import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageList state domain
 */

const selectImageListDomain = state => state.imageList || initialState;

const selectLoading = createSelector(
  selectImageListDomain,
  imageList => imageList.loading,
);

const selectSuccess = createSelector(
  selectImageListDomain,
  imageList => imageList.success,
);

const selectFailure = createSelector(
  selectImageListDomain,
  imageList => imageList.failure,
);

const selectImages = createSelector(
  selectImageListDomain,
  imageList => imageList.images,
);

const selectImage = createSelector(
  selectImages,
  (_, index) => index,
  (images, index) => images[index],
);

const selectImageTitl = createSelector(
  selectImage,
  image => image.title,
);

const selectInitialScrollOffset = createSelector(
  selectImageListDomain,
  imageList => imageList.scrollOffset,
);

export {
  selectImageListDomain,
  selectLoading,
  selectSuccess,
  selectFailure,
  selectImages,
  selectImage,
  selectImageTitl,
  selectInitialScrollOffset,
};
