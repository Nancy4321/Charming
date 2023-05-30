<template>
  <div>
    <Home />
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
import Home from './Home.vue';
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

let timer = null;

export default {
  components: {
    Home,
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
};
</script>
