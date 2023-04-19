<template>
  <div>
    <Header />

    <div>
      <router-view name="slider"></router-view>
    </div>
    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style scoped lang="scss">
// @import "@assets/sass/main.scss";
@import "./assets/sass/_vars";
@import "./assets/sass/main";
</style>
