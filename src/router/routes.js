import Index from '@/layout/index.vue'

export default [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
      }, {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue')
      }
    ]
  }
]
