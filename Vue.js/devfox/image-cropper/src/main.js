import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

new Vue({
    components: {
      Cropper
    }
  })
  
createApp(App).mount('#app')
