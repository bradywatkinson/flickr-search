/**
 *
 * Image
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

function ImageListItem({ data, index, style }) {
  const image = data[index];

  return (
    <ListItem
      button
      component={Link}
      to={`/${index}`}
      style={style}
      key={index}
    >
      <ListItemText primary={image.title} />
      <ArrowForwardIcon />
    </ListItem>
  );
}

export default ImageListItem;
