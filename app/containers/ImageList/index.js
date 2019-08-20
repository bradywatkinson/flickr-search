/**
 *
 * ImageList
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FixedSizeGrid as List } from 'react-window';
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
            columnCount={2}
            columnWidth={width / 2}
            rowCount={images.length / 2}
            rowHeight={width / 2}
            itemData={images}
            onScroll={dispatchScrollImageList}
            initialScrollTop={initialScrollOffset}
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
    ({ scrollTop }) => dispatch(scrollImageList(scrollTop)),
    500,
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ImageList);
