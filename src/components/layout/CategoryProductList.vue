<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-3">
        <Filter />
        <!--Nội dung của cột 1 tại đây-->
      </div>
      <div class="col-9">
        <div class="row">
          <div class="List_item" v-if="productList">
            <div
              v-for="(product, index) in productList"
              :key="index"
              class="col-lg-4 col mb-4 Item"
            >
              <router-link
                :to="{
                  name: 'ProductDetail',
                  params: { _id: product._id },
                }"
                class="product_card"
              >
                <img
                  :src="product.image"
                  class="card-img"
                  alt="Product Image"
                />
                <div class="card_descrip">
                  <h5 class="card_title">{{ product.name }}</h5>
                  <p class="card_price">{{ product.price }}000VND</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!--Nội dung của cột 2 tại đây-->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProductStore } from "../../store/productStore";
import Filter from "../layout/Filter.vue";
export default {
  components: { Filter },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useProductStore();

    //lấy danh sách sản phẩm theo category 'switch'
    const productList = store.productList(props.category);
    return { productList };
  },
};
</script>

<style lang="scss">
.List_item {
  display: flex;
  flex-wrap: wrap;
  .Item {
    padding: 12px;
  }
  .product_card {
    cursor: pointer;
    text-decoration: none;
    .card-img {
      height: 100%;
      max-height: 290px;
      border-radius: 4px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: all 0.3s ease-out;
      object-fit: cover;

      &:hover {
        transform: scale(1.02);
        cursor: pointer;
        opacity: 0.9;
        padding: 0;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      }
    }
  }
  .card_descrip {
    .card_title {
      margin-top: 14px;
      font-size: 1.4rem;
      text-align: center;
      color: $text-color;
      text-decoration: none;
      font-weight: bolder;
    }
    .card_price {
      text-align: right;
      font-size: 1.2rem;
      color: #003566;
      border: solid 1px #f5ebe0;
      border-radius: 5px;
      display: inline;
      padding: 4px;
    }
  }
}
// .container {
//   margin: 0 auto; /* Căn giữa theo chiều ngang */
//   display: table; /* Căn giữa theo chiều dọc */
// }
</style>
