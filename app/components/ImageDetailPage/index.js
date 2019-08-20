/**
 *
 * ImageDetailPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ImageDetail from 'containers/ImageDetail';
import Header from 'components/Header';
import { selectImageTitl } from 'containers/ImageListContainer/selectors';

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function ImageDetailPage({ match, title }) {
  return (
    <div>
      <Helmet>
        <title>ImageDetail</title>
        <meta name="description" content="Description of ImageDetail" />
      </Helmet>
      <Page>
        <Header title={title} back />
        <ImageDetail imageIndex={match.params.imageIndex} />
      </Page>
    </div>
  );
}

const mapStateToProps = (state, { match }) => ({
  title: selectImageTitl(state, match.params.imageIndex),
});

export default connect(
  mapStateToProps,
  null,
)(ImageDetailPage);
