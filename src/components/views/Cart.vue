<template>
  <div class="container mx-auto cart">
    <div class="row">
      <ul
        v-for="product in data.products"
        :key="product.productId"
        class="col-lg-12"
      >
        <li class="item">
          <img
            :src="product.productId.image"
            alt=""
            class="col-lg-2 col-md-2 col-2 col-xl-2 pro_img"
          />
          <div class="pro_name col-lg-4">
            <h3>{{ product.productId.name }}</h3>
          </div>
          <div class="col-lg-1">
            <h4>{{ product.quantity }}</h4>
          </div>
          <div class="pro_price col-lg-3">
            <h3>{{ product.productId.price }}.000đ</h3>
          </div>
          <div class="col-lg-2">
            <button class="col-lg-2 delete_btn">Xóa</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="row total" v-if="data.products">
      <h2 class="col-lg-12">Tổng cộng: {{ data.totalPrice }}</h2>
      <button class="col-lg-4 mx-auto pay_btn">Thanh toán ngay</button>
    </div>
    <div v-else class="row">
      <img
        src="https://bizweb.dktcdn.net/100/408/793/themes/794454/assets/empty-cart.png?1677070303038"
        alt="giỏ hàng trống rỗng"
        class="col-lg-4 col-md-4 col-xl-4 col-2 mx-auto"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CartService from "../../services/cart.service";
export default {
  name: "Cart",
  setup() {
    const data = ref([]);

    CartService.getCart()
      .then((response) => {
        data.value = response.data;
      })
      .catch((error) => console.log(error));
    return { data };
  },
};
</script>

<style scoped lang="scss">
.cart {
  margin: 30px 0;
}
ul {
  padding: 10px 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  h3 {
    font-weight: bold;
  }
}

.pro_img {
  padding: 10px;
  border-radius: 20px;
}
.delete_btn {
  width: 50%;
  padding: 10px 0;
  font-size: 1.4rem;
  border: none;
  background-color: black;
  transition: all 0.2s ease-in-out;
  color: #fff;
  &:hover {
    opacity: 0.3;

    background-color: darkblue;
    scale: 1.1;
    border-radius: 30px;
  }
}
.pay_btn {
  padding: 12px;
  font-size: 1.5rem;
  border: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
  background-color: #000;
  &:hover {
    opacity: 0.3;
  }
}
</style>
