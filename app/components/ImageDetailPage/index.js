/**
 *
 * ImageDetailPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ImageDetail from 'containers/ImageDetail';
import Header from 'components/Header';

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function ImageDetailPage({ match }) {
  return (
    <div>
      <Helmet>
        <title>ImageDetail</title>
        <meta name="description" content="Description of ImageDetail" />
      </Helmet>
      <Page>
        <Header title="Image" back />
        <ImageDetail imageIndex={match.params.imageIndex} />
      </Page>
    </div>
  );
}

export default ImageDetailPage;
