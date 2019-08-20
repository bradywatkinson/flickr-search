/**
 *
 * ImageListPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ImageList from 'containers/ImageList';
import Header from 'components/Header';

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function ImageListPage() {
  return (
    <div>
      <Helmet>
        <title>ImageList</title>
        <meta name="description" content="Description of ImageList" />
      </Helmet>
      <Page>
        <Header title="Images" search />
        <ImageList />
      </Page>
    </div>
  );
}

export default ImageListPage;
