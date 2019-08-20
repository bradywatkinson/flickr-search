/**
 *
 * Image
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgContainer = styled.img`
  width: 100%;
  height: 100%;
`;

function ImageListItem({ data, columnIndex, rowIndex, style }) {
  const index = columnIndex * 2 + rowIndex;
  const image = data[index];

  return (
    <Link to={`/${index}`} style={style}>
      <ImgContainer src={image.media.m} />
    </Link>
  );
}

export default ImageListItem;
