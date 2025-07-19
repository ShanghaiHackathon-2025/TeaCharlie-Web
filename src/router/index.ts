import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue'),
    },
    {
      path: '/downloading/:device/:os/:arch',
      name: 'downloading',
      component: () => import('../views/DownloadingView.vue'),
      props: true,
    },
  ],
})

export default router
