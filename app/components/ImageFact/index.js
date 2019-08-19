/**
 *
 * ImageFact
 *
 */

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function ImageFact({ label, value, html, icon }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={label}
        secondary={
          html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : value
        }
      />
    </ListItem>
  );
}

export default ImageFact;
