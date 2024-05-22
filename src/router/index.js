import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/registerView.vue'
import loginView from '../views/loginView.vue'
import searchView from '../views/searchView.vue'
import db from '../../firebase/init';








// await setDoc(doc(db, "users", "alovelace"), {
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// });  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      component: registerView
    },
    {
      path: '/search/:searchterm',
      component: searchView,
      name: 'search',
      props: route => ({ searchterm: route.query.searchterm }),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: loginView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/registerView.vue')
    }
  ]
})

export default router
