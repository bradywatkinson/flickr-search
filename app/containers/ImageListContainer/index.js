/**
 *
 * ImageListContainer
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { renderRoutes } from 'react-router-config';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import LoadingIndicator from 'components/LoadingIndicator';

import { loadImagesRequest } from './actions';
import { selectLoading, selectSuccess, selectFailure } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ImageListContainer({
  dispatchLoadImagesRequest,
  success,
  failure,
  route,
}) {
  useInjectReducer({ key: 'imageList', reducer });
  useInjectSaga({ key: 'imageList', saga });

  useEffect(() => {
    dispatchLoadImagesRequest();
  }, []);

  if (success) {
    return renderRoutes(route.routes);
  }
  if (failure) {
    return <FormattedMessage {...messages.failure} />;
  }
  return <LoadingIndicator />;
}

const mapStateToProps = state => ({
  loading: selectLoading(state),
  success: selectSuccess(state),
  failure: selectFailure(state),
});

const mapDispatchToProps = {
  dispatchLoadImagesRequest: loadImagesRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ImageListContainer);
