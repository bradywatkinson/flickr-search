/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { renderRoutes } from 'react-router-config';

import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import GlobalStyle from '../../global-styles';

import routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EE4C3F',
    },
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
      <GlobalStyle />
    </div>
  );
}
