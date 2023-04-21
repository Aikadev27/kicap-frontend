import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/views/Homepage.vue";
import Slider from "@/components/layout/Slider.vue";
import CategoryProductList from "@/components/layout/CategoryProductList.vue";
import ProductDetail from "@/components/views/ProductDetail.vue";
import Cart from "@/components/views/Cart.vue";
import Sigup from "@/components/views/Sigup.vue";
import Login from "@/components/views/Login.vue";
import PageNotFound from "@/components/views/PageNotFound.vue";
// policy
import Inspection from "@/components/policy/Inspection.vue";
import Refund from "@/components/policy/Refund.vue";
import Warranty from "@/components/policy/Warranty.vue";
// service
import Delivery from "@/components/customerService/Delivery.vue";
import ShoppingGuide from "@/components/customerService/ShoppingGuide.vue";
import Terms from "@/components/customerService/Terms.vue";
import Profile from "@/components/user/Profile.vue";
import Token from "../utils/token";
import { useAuthStore } from "../store/authStore";
import AuthService from "../services/auth.service";
import Payment from "../components/views/Payment.vue";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
  {
    path: "/",
    name: "home",
    components: {
      slider: Slider,
      default: HomePage,
    },
  },
  {
    path: "/account",
    component: Profile,
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
  {
    path: "/login",
    component: Login,
  },
  // policy
  {
    path: "/chinh sach bao hanh",
    component: Warranty,
  },
  {
    path: "/chinh sach kiem hang",
    component: Inspection,
  },
  {
    path: "/chinh sach hoan tien",
    component: Refund,
  },
  // service
  {
    path: "/quy trinh giao hang",
    component: Delivery,
  },
  {
    path: "/huong dan mua hang",
    component: ShoppingGuide,
  },
  {
    path: "/dieu khoan dich vu",
    component: Terms,
  },
  {
    path: "/payment",
    component: Payment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async () => {
  try {
    const authStore = useAuthStore();
    authStore.setToken(Token.token);
    const user = await AuthService.auth();
    authStore.setUser(user.data);
  } catch (error) {}
});
export default router;
