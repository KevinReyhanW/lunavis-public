
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
//import Login from '../pages/Login.vue';
// import LoginPage from '../pages/Login.vue'
import LoginPage from '../pages/LoginPage.vue'
import LoginKiosk from '../pages/LoginKiosk.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/kiosk',
      name: 'Kiosk',
      component: LoginKiosk 
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ],
});
