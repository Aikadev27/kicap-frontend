import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/views/Homepage.vue";
import Slider from "@/components/layout/Slider.vue";
import CategoryProductList from "@/components/layout/CategoryProductList.vue";
import ProductDetail from "@/components/views/ProductDetail.vue";
import Cart from "@/components/views/Cart.vue";
import Sigup from "@/components/views/Sigup.vue";
const routes = [
  {
    path: "/",
    name: "home",
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
  {
    path: "/cart",
    // name: "ProductDetail",
    component: Cart,
    props: true,
  },
  {
    path: "/register",
    component: Sigup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
