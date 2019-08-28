import ImageListContainer from 'containers/ImageListContainer';
import ImageListPage from 'pages/ImageListPage/Loadable';
import ImageDetailPage from 'pages/ImageDetailPage/Loadable';

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
