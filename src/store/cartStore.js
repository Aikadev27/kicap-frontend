import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("CartId", {
  state: () => ({
    cart: "",
  }),
  getters: {},
  actions: {},
});
