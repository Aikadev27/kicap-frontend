<template>
  <div class="container-fluid">
    <div class="slider">
      <div class="carousel-slider">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../assets/imgs/slider_1.png"
                class="d-block w-100"
                alt="slider 1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/imgs/slider_2.png"
                class="d-block w-100"
                alt="slider 2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/imgs/slider_3.png"
                class="d-block w-100"
                alt="slider 3"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- <SectionVue /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.slider {
  margin-top: 60px;
}
.slider img {
  max-height: 700px;
  height: 100%;
  object-fit: cover;
}

/* !todo: làm cầu nối giữa SẢN PHẨM và PRODUCT LIST + binding data từng thành phần */
</style>
