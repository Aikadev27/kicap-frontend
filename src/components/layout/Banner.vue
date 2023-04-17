<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-ld-12 col-xl-12 col-xs-12">
        <img
          src="../../assets/imgs/banner.png"
          alt="banner"
          class="banner_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
.banner_img {
  width: 100%;
  object-fit: cover;
  max-height: 250px;
  margin: 20px 0;
  padding: 0 20px;
}
</style>
