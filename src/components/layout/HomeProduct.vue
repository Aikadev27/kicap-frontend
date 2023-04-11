<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <HomeProductDetail :datas="datas" />
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
// import ProductSlider from "../layout/ProductSlider.vue";
import { computed, onMounted } from "vue";
import { useProductStore } from "../../store/productStore";
// import component chi tiet
import HomeProductDetail from "./HomeProductDetail.vue";
// import ProductService from "../../services/product.service";

export default {
  name: "HomeProduct",
  components: { HomeProductDetail },
  // data() {
  //   return {
  //     products: [],
  //   };
  // },
  setup() {
    const productStore = useProductStore();
    // const data = ref([]);
    const datas = computed(() => {
      return [
        productStore.switchList,
        productStore.keycapsList,
        productStore.artisanList,
        productStore.combosList,
        productStore.kitsList,
        productStore.accessesList,
      ];
    });

    onMounted(() => {
      productStore.getProductData();
    });

    return {
      ...storeToRefs(productStore),
      datas,
    };
  },
  // mounted() {
  //   ProductService.getProductData().then((res) => {
  //     this.products = res.data;
  //   });
  // },
  // computed: {
  //   switchList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "switch"
  //     );
  //   },
  //   keycapsList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "keycap bo"
  //     );
  //   },
  //   artisanList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "keycap le"
  //     );
  //   },
  //   combosList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "combo"
  //     );
  //   },
  //   kitsList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "kit"
  //     );
  //   },
  //   accessesList() {
  //     return this.products.filter(
  //       (product) => product.categoryId.type == "phu kien"
  //     );
  //   },
  // },
};
</script>

<style scoped lang="scss"></style>
