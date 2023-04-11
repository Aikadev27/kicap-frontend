import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/views/Homepage.vue";
import Slider from "@/components/layout/Slider.vue";
import CategoryProductList from "@/components/layout/CategoryProductList.vue";
import ProductDetail from "@/components/views/ProductDetail.vue";
const routes = [
  {
    path: "/",
    components: {
      slider: Slider,
      default: HomePage,
    },
  },

  {
    path: "/category/:category",
    name: "CategoryProductList",
    component: CategoryProductList,
    props: true,
  },
  {
    path: "/product/:_id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
