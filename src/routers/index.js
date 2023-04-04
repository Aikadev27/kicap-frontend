import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/layout/Homepage.vue";
import Slider from "@/components/layout/Slider.vue";
const routes = [
  {
    path: "/",
    components: {
      slider: Slider,
      default: Home,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
