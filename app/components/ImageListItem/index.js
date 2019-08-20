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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listText: {
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  },
});

function ImageListItem({ data, index, style }) {
  const image = data[index];
  const classes = useStyles();

  return (
    <ListItem
      button
      component={Link}
      to={`/${index}`}
      style={style}
      key={index}
    >
      <ListItemText
        primary={image.title || <i>(untitled)</i>}
        secondary={image.author}
        classes={{ primary: classes.listText, secondary: classes.listText }}
        primaryTypographyProps={{ component: 'p' }}
      />
      <ArrowForwardIcon />
    </ListItem>
  );
}

export default ImageListItem;
