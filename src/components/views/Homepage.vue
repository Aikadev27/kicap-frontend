<template>
  <div class="container">
    <div class="row">
      <HomeProduct />
    </div>
  </div>
</template>

<script>
import HomeProduct from "../layout/HomeProduct.vue";
export default {
  name: "Homepage",
  components: { HomeProduct },
};
</script>

<style scoped lang="scss"></style>
