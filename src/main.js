import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import Catalogue from './components/Catalogue.vue';
import Testimonial from './components/Testimonial.vue';
import Fascinators from './components/CatalogueList/Fascinators.vue';
import HairPieces from './components/CatalogueList/HairPieces.vue';
import BridalHairAccessories from './components/CatalogueList/BridalHairAcc.vue';
import Hats from './components/CatalogueList/Hats.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact-us', component: Contact },
  { path: '/what-we-do', component: WhatWeDo },
  { path: '/testimonial', component: Testimonial },
  { path: '/catalogue', component: Catalogue },
  { path: '/catalogue/fascinators', component: Fascinators },
  { path: '/catalogue/hats', component: Hats },
  { path: '/catalogue/bridal-hair-accessories', component: BridalHairAccessories },
  { path: '/catalogue/headbands', component: HairPieces },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false
Vue.mixin({
  mounted() {
    document.querySelector('base').setAttribute('href', '/catalogue/');
  }
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
