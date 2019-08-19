/**
 *
 * ImageList
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import _ from 'lodash';

import {
  selectImages,
  selectInitialScrollOffset,
} from 'containers/ImageListContainer/selectors';
import { scrollImageList } from 'containers/ImageListContainer/actions';
import ImageListItem from 'components/ImageListItem';

const ListContainer = styled.div`
  height: 100%;
`;

export function ImageList({
  images,
  initialScrollOffset,
  dispatchScrollImageList,
}) {
  return (
    <ListContainer>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemSize={75}
            itemCount={images.length}
            itemData={images}
            onScroll={dispatchScrollImageList}
            initialScrollOffset={initialScrollOffset}
          >
            {ImageListItem}
          </List>
        )}
      </AutoSizer>
    </ListContainer>
  );
}

const mapStateToProps = state => ({
  images: selectImages(state),
  initialScrollOffset: selectInitialScrollOffset(state),
});

const mapDispatchToProps = dispatch => ({
  dispatchScrollImageList: _.throttle(
    ({ scrollOffset }) => dispatch(scrollImageList(scrollOffset)),
    500,
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ImageList);
