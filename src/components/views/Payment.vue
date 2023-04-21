<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-xl-12 col-12">
        <img
          src="https://momsla.com/wp-content/uploads/2022/07/Thanks-for-shopping.png"
          alt=""
        />
        <div class="col-lg-6 mx-auto back">
          <router-link to="/">
            <button>Tiếp tục mua hàng</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
};
</script>

<style scoped lang="scss">
img {
  height: 60%;
  width: 100%;
  object-fit: cover;
}
button {
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
</style>
