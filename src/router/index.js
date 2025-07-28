
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
//import Login from '../pages/Login.vue';
import LoginPage from '../pages/LoginPage.vue'

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
      path: '/home',
      name: 'Home',
      component: Home
    },
  ],
});
