<template id="app">
  <cropper
    class="cropper"
    :src="img"
    @change="change"
  ></cropper>
</template>

<script>
new Vue({
  el: '#app',
  data: {
    img: '/path/to/img.jpg'
  },
  methods: {
    change({coordinates, canvas}) {
      console.log(coordinates, canvas)
    }
  },
  components: {
    Cropper
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
