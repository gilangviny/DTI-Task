import { Home, About, Contact, Skills, Work } from '../pages';

const routes = [
  {
    path: '/about',
    component: About,
    isPublic: true,
  },
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/skills',
    component: Skills,
    isPublic: true,
  },
  {
    path: '/work',
    component: Work,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
