<template>
  <div class="container">
    <div v-if="product">{{ product }}</div>
  </div>
</template>

<script>
import ProductService from "../../services/product.service";
// import { useProductStore } from "../../store/productStore";

export default {
  name: "ProductDetail",
  props: {
    _id: {
      type: String,
      required: true,
    },
  },
  data() {
    return { product: null };
  },
  mounted() {
    ProductService.getProductById(this.$props._id).then((res) => {
      this.product = res.data;
    });
  },
};
</script>

<style></style>
