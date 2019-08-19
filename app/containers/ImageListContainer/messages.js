/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ImageList';

export default defineMessages({
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Success!',
  },
  failure: {
    id: `${scope}.failure`,
    defaultMessage: 'Failure!',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'ERROR!',
  },
});
