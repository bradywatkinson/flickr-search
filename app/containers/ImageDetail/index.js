/**
 *
 * ImageDetail
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkIcon from '@material-ui/icons/Link';
import ImageIcon from '@material-ui/icons/Image';

import { selectImage } from 'containers/ImageListContainer/selectors';
import ImageFact from 'components/ImageFact';

const ImageDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ImgContainer = styled.img`
  width: 100vw;
  height: 100vw;
  border: 0;
  margin-top: 3px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    'flex-grow': 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function ImageDetail({ image }) {
  const classes = useStyles();

  return (
    <ImageDetailContainer>
      <ImgContainer id="flickr-image" src={image.media.m} />
      <List className={classes.root}>
        <ImageFact
          label="Title"
          value={`${image.title}`}
          icon={<DescriptionIcon />}
        />
        <Divider />
        <ImageFact label="Link" value={`${image.link}`} icon={<LinkIcon />} />
        <Divider />
        <ImageFact
          label="Activity"
          html={image.description}
          icon={<ImageIcon />}
        />
        <Divider />
      </List>
    </ImageDetailContainer>
  );
}

const mapStateToProps = (state, { imageIndex }) => ({
  image: selectImage(state, imageIndex),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(ImageDetail);
