import ImageListContainer from 'containers/ImageListContainer';
import ImageListPage from 'components/ImageListPage/Loadable';
import ImageDetailPage from 'components/ImageDetailPage/Loadable';

const routes = [
  {
    component: ImageListContainer,
    routes: [
      {
        path: '/',
        exact: true,
        component: ImageListPage,
      },
      {
        path: '/:imageIndex',
        component: ImageDetailPage,
      },
    ],
  },
];

export default routes;
