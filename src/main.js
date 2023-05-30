import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue'
import WhatWeDo from './components/WhatWeDo.vue'
import Testimonial from './components/Testimonial.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/what-we-do', component: WhatWeDo },
  { path: '/testimonial', component: Testimonial },
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use 'history' mode for clean URLs (optional)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
