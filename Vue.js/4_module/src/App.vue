<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

{
  aliases: [
    {'@' : '/src/'},
    {'~' : '/'},
  ]
}

<script>
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  components: {
    Header, 
    Footer
  },
};
</script>

<style lang="scss">
</style>
