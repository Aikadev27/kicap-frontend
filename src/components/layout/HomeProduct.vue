<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- <ul v-for="x in datas" :key="x">
        </ul> -->
        <HomeProductDetailVue :datas="datas" />
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useProductStore } from "../../store/productStore";
import { onMounted } from "vue";
// import component chi tiet
import HomeProductDetailVue from "./HomeProductDetail.vue";

export default {
  name: "HomeProduct",
  components: { HomeProductDetailVue },
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
