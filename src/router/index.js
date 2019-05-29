import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import Contact from '@/views/contact/Contact';
import Experience from '@/views/experience/Experience';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    }
  ],
  mode: 'history'
});
