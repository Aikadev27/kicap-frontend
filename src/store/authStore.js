import { defineStore } from "pinia";
import axios from "axios";
import Token from "@/utils/token";

export const useAuthStore = defineStore("userId", {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isAuthenticated() {
      return this.user !== null && this.token !== null;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token) {
      this.token = token;
      Token.token = token;
    },
    clearToken() {
      this.token = null;
      delete axios.defaults.headers.common["Authorization"];
    },
    clearUserData() {
      this.user = null;
      this.token = null;
      Token.token = null;
    },
  },
});
