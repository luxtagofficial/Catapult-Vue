import Vue from 'vue';
import Router from 'vue-router';
import Demo from './views/Demo.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
    },
  ],
});
