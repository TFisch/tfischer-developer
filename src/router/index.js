import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import About from '@/views/about/About';
import Contact from '@/views/contact/Contact';
import Experience from '@/views/experience/Experience';
import ThisSite from '@/views/thissite/ThisSite';
import Projects from '@/views/projects/Projects';
import Education from '@/views/education/Education';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/thissite',
      name: 'ThisSite',
      component: ThisSite
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history',
  linkExactActiveClass: 'is-active'
});
