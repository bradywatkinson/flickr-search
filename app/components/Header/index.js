/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    color: 'white',
  },
});

function Header({ title, back }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          {back && (
            <IconButton
              className={classes.icon}
              component={Link}
              to="/"
              color="inherit"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
