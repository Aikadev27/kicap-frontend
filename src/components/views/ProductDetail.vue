<template>
  <div v-if="product" class="container mx-auto">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" alt="" class="product_img" />
      </div>
      <div class="col-md-6">
        <div class="info">
          <h1 class="product_name">{{ product.name }}</h1>
          <p class="sku"><span>SKU:</span> {{ product.sku }}</p>
          <h4 class="brand">THƯƠNG HIỆU: {{ product.brand }}</h4>
          <h2 class="price">{{ product.price }}<u>.000đ</u></h2>
          <p class="state">Tình trạng: <span>đã có người đặt trước</span></p>
        </div>
        <div class="quantity">
          <p>Số lượng :</p>
          <button class="quantity-button" @click="decrement">-</button>
          <input type="text" class="quantity-input" v-model="quantity" />
          <button class="quantity-button" @click="increment">+</button>
        </div>
        <button class="shop_now">
          <span>MUA NGAY VỚI GIÁ {{ product.price }}<u>.000đ</u></span
          ><br />
          <span>Đặt mua giao hàng tận nơi</span>
        </button>
        <button class="add-to-cart" @click="addToCart">
          Thêm vào giỏ hàng
        </button>
        <div class="contact">
          <p>Gọi đặt mua 09231321 (miễn phí 8:30 - 21:30)</p>
          <h4>FREESHIP VỚI ĐƠN HÀNG TỪ 800.000Đ</h4>
          <h4>BẢO HÀNH 1 NĂM DO LỖI NHÀ SẢN XUẤT</h4>
          <h4>CAM KẾT 100% CHÍNH HÃNG</h4>
        </div>
      </div>
    </div>
    <!-- <Cart v-if="show" :cart="this.cart" /> -->
  </div>
</template>

<script>
import ProductService from "../../services/product.service";
import CartService from "../../services/cart.service";
import { toast } from "vue3-toastify";
export default {
  name: "ProductDetail",
  props: {
    _id: {
      type: String,
      required: true,
    },
  },

  data() {
    return { product: null, quantity: 1, cart: [], show: false };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    async addToCart() {
      await CartService.addtoCart({
        productId: this.product._id,
        quantity: this.quantity,
      })
        .then(() =>
          toast.success("Đã thêm vào giỏ hàng", {
            autoClose: 2000,
          })
        )
        .catch(() =>
          toast.error("thêm không thành công,Vui lòng đăng nhập", {
            autoClose: 2000,
          })
        );
    },
  },

  mounted() {
    ProductService.getProductById(this.$props._id).then((res) => {
      this.product = res.data;
    });
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 60px 0;
}
.product_img {
  object-fit: contain;
  max-width: 95%;
  height: auto;
  border-radius: 4px;
}
.info {
  line-height: 3rem;
  .product_name {
    font-size: 1.8rem;
    font-weight: bolder;
    margin: 4px 0;
  }
  .sku {
    font-size: 1.6rem;
    span {
      font-weight: bold;
    }
  }
  .brand {
    margin: 10px 0;
    color: red;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .price {
    font-size: 2rem;
    margin: 10px 0;
  }
  .state {
    font-size: 1.6rem;
    span {
      color: rgb(85, 135, 135);
    }
  }
}
.quantity {
  margin: 10px 0;
  p {
    font-size: 1.6rem;
    margin-right: 20px;
  }
}
.shop_now {
  display: block;
  width: 50%;
  background-color: #000;
  color: #fff;
  padding: 10px 30px;
  margin: 10px 0;
  border: none;
  font-size: 1.4rem;
  &:hover {
    background-color: $text-hover-color;
    transition: all 0.2s ease-in-out;
    color: #333;
  }
}
.add-to-cart {
  padding: 10px 20px;
  border-color: #123;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  &:hover {
    background-color: $back-hover-color;
  }
}
.contact {
  margin-top: 40px;
  p,
  h4 {
    font-size: 1.4rem;
    letter-spacing: 1.4px;
    padding: 4px;
  }
}
.quantity {
  display: flex;
  align-items: center;
}

.quantity-button {
  display: inline-block;
  background-color: #f7f7f7;
  color: #333;
  font-size: 12px;
  padding: 4px 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
}

.quantity-input {
  display: inline-block;
  font-size: 16px;
  text-align: center;
  width: 40px;
  margin: 0 8px;
  border: none;
  outline: none;
  border-radius: 4px;
}
</style>
