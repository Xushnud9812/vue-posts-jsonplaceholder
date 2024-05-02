import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home.vue'),
          children: [
            {
              path: '/edit-post/:id',
              name: 'edit-post',
              component: () => import('@/components/EditPost.vue')
            },
          ]
        },
        {
          path: '/posts/:id',
          name: 'post-details',
          component: () => import('@/pages/post-details.vue')
        },
      ]
    },

  ]
})



export default router