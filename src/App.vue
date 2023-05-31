<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <loading-overlay 
      :active="isLoading"
      :can-cancel="canCancel"
      :on-cancel="whenCancelled"
      :is-full-page="fullPage"
      :height="height"
      :width="width"
      :color="color"
      :loader="loader"
      :background-color="bgColor">
    </loading-overlay>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

let timer = null;

export default {
  components: {
    Header,
    Footer,
    LoadingOverlay,
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      canCancel: true,
      loader: 'dots',
      color: '#fa3d3d',
      bgColor: '#ffffff',
      height: 128,
      width: 128,
    };
  },
  mounted() {
    this.simulate();
  },
  methods: {
    simulate() {

      window.addEventListener('load', () => {
        clearTimeout(timer);
        this.isLoading = false;
      });

      //fallback loader timer
      timer = setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    whenCancelled() {
      clearTimeout(timer);
    },
  },
}
</script>
