import { createRouter, createWebHistory } from 'vue-router'
import { useThemeStore } from '@/stores/theme';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const themeStore = useThemeStore();
        themeStore.setTheme(themeStore.getTheme);
        // todo auth
        const isAuthenticated = false; 

        if (isAuthenticated) {
          next(); 
        } else {
          next(); 
          // next({ name: 'home' }); 
          // next({ name: 'about' }); 
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
