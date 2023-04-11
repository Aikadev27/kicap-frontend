import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore("productId", {
  state: () => ({
    productDatas: [],
  }),
  getters: {
    products: (state) => state.productDatas,
    productList: (state) => (categoryType) =>
      state.productDatas.filter(
        (product) => product.categoryId.type === categoryType
      ),
    switchList: (state) =>
      state.productDatas.filter(
        (product) => product.categoryId.type == "switch"
      ),
    keycapsList: (state) =>
      state.productDatas.filter(
        (product) => product.categoryId.type == "keycap bo"
      ),
    artisanList: (state) =>
      state.productDatas.filter(
        (product) => product.categoryId.type == "keycap le"
      ),
    combosList: (state) =>
      state.productDatas.filter(
        (product) => product.categoryId.type == "combo"
      ),
    kitsList: (state) =>
      state.productDatas.filter((product) => product.categoryId.type == "kit"),
    accessesList: (state) =>
      state.productDatas.filter(
        (product) => product.categoryId.type == "phu kien"
      ),
  },
  actions: {
    async getProductData() {
      try {
        const respone = await axios("http://localhost:3000/api/product");
        this.productDatas = respone.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductById(id) {
      try {
        console.log(id);
        const respone = await axios.get(
          `http://localhost:3000/api/product/${id}`
        );
        return respone.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
