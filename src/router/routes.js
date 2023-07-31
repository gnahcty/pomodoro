const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutPage.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'),
        meta: {
          title: 'Home | PomPom'
        }
      },
      {
        path: 'todo',
        component: () => import('pages/ToDos.vue'),
        meta: {
          title: 'Todo | PomPom'
        }
      },
      {
        path: 'settings',
        component: () => import('pages/SettingPage.vue'),
        meta: {
          title: 'Settings | PomPom'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
