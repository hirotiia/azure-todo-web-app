export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  auth: {
    register: {
      path: '/auth/register',
      getHref: () => '/auth/register',
    },
    login: {
      path: '/auth/login',
      getHref: () => '/auth/login',
    },
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    todo: {
      path: '',
      getHref: () => '/app',
    },
  },
};
