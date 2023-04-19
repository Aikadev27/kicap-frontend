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
import { computed, onMounted } from "vue";
import { useProductStore } from "../../store/productStore";
import HomeProductDetail from "./HomeProductDetail.vue";

export default {
  name: "HomeProduct",
  components: { HomeProductDetail },

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
};
</script>

<style scoped lang="scss"></style>
