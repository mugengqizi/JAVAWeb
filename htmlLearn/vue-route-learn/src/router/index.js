import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: HomeView,
      children: [
        {
          path: '/Home/shouye',
          name: 'shouye',
          component: ()=>import('../views/Home/ShouYeView.vue'),
        },
        {
          path: '/Home/guanli',
          name: 'guanli',
          redirect: '/guanli/user',
          children: [
            {
              path: '/guanli/user',
              name: 'user',
              component: () => import('../views/Home/guanli/User.vue'),
            },
            {
              path: '/guanli/role',
              name: 'role',
              component: () => import('../views/Home/guanli/Role.vue'),
            },
            {
              path: '/guanli/dept',
              name: 'dept',
              component: () => import('../views/Home/guanli/Dept.vue'),
            },
            {
              path: '/guanli/zidian',
              name: 'dept',
              component: () => import('../views/Home/guanli/zidian.vue'),
            },
          ],

        },
        {
          path: '/Home/jiankong',
          name: 'jiankong',
          redirect: '/Home/jiankong/user',
          children: [
            {
              path: '/Home/jiankong/user',
              name: 'biaoge',
              component: () => import('../views/Home/jiankong/UserView.vue'),
            },
          ]
        },
        {
          path: '/Head',
          name: 'Head',
          redirect: '/Head/geren',
          children: [
            {
              path: '/Head/geren',
              name: 'geren',
              component: () => import('../views/Head/GeRen.vue'),
              children: [
                {
                  path: '/head/geren/baseinfo',
                  name: 'xiugaimima',
                  component: () => import('../views/Head/base/baerinfo.vue'),
                },
              ]
            },
          ]
        },
        {
          path: '/Home/rizhi',
          name: 'rizhi',
          redirect: '/Home/rizhi/caozuo',
          children: [
            {
              path: '/Home/rizhi/caozuo',
              name: 'caozuo',
              component: () => import('../views/Home/RiZhi/CaoZuo.vue'),
            },
          ]
        },

      ]
    },
    {
      path: '/',
      name: 'Login',
      component: ()=>import('../views/LoginView.vue'),
    },
    
    
  
  ],
})

export default router
