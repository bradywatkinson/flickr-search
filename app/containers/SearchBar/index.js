/**
 *
 * SearchBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { loadImagesRequest } from 'containers/ImageListContainer/actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: 80,
    '&:focus': {
      width: 200,
    },
  },
}));

export function SearchBar({ dispatchLoadImagesRequest }) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={dispatchLoadImagesRequest}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchLoadImagesRequest: event =>
    dispatch(loadImagesRequest(event.target.value)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
