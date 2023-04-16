<template>
  <div class="container mx-auto">
    <div class="row">
      <form class="login col-md-6 col-lg-6 mx-auto" @submit.prevent="login">
        <div class="form-group col-md-12 col-xs-6">
          <label for="userName">User Name?</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your user name"
            v-model="userName"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12 col-xs-6">
          <label for="pass">PassWord?</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            v-model="pass"
            class="form-control"
          />
        </div>
        <div class="button col-md-2 col-lg-2 mx-auto">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
        <div class="register">
          <p>
            Do not have an account ?
            <router-link to="/register">register here</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../../store/authStore";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const userName = ref("");
    const pass = ref("");
    const authStore = useAuthStore();
    const router = useRouter();
    async function login() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          { userName: userName.value, pass: pass.value }
        );
        authStore.setUser(response.data.user);
        authStore.setToken(response.data.token);
        console.log(response.data.user);
        // console.log(authStore.isAuthenticated);
        if (authStore.isAuthenticated) {
          router.push("/");
          alert("LOGIN SUCCESSFULLY");
        }
      } catch (error) {
        console.log(error);
      }
    }
    return { userName, pass, login };
  },
};
</script>

<style scoped lang="scss">
.login {
  padding: 20px;
  margin: 50px;
  border-image: linear-gradient(#03045e, #caf0f8) 30;
  border-width: 4px;
  border-style: solid;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  label {
    font-size: 1.6rem;
    font-weight: bolder;
    margin: 10px 0;
  }
  input {
    padding: 20px 0;
    font-size: 1.4rem;
    text-indent: 20px;
    &::placeholder {
      color: #cccccc;
    }
  }
  button {
    margin-top: 10px;
    text-align: center;
    font-size: 1.4rem;
    color: alpha($color: #000000);
  }
  .register {
    margin-top: 10px;
    p {
      font-size: 1.4rem;
    }
  }
}
</style>
