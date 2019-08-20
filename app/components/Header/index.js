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

import SearchBar from 'containers/SearchBar';

const useStyles = makeStyles({
  icon: {
    color: 'white',
  },
  container: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  title: {
    'white-space': 'nowrap',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  },
});

function Header({ title, back, search }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.container}>
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
          <Typography variant="h6" color="inherit" className={classes.title}>
            {title}
          </Typography>
          {search && <SearchBar />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
