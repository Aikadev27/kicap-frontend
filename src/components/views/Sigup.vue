<template>
  <div class="container mx-auto">
    <div class="row">
      <form
        class="signin col-md-6 col-lg-6 mx-auto"
        @submit.prevent="handleSubmit"
      >
        <div class="form-group col-md-12 col-xs-6">
          <label for="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            v-model="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12 col-xs-6">
          <label for="fullName">Your User Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            v-model="fullName"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12 col-xs-6">
          <label for="userName">Your User Name</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your email"
            v-model="userName"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12 col-xs-6">
          <label for="pass">Your PassWord</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            v-model="pass"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12 col-xs-6">
          <label for="phone">Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            v-model="phone"
            class="form-control"
            required
          />
        </div>
        <div class="button col-md-2 col-lg-2 mx-auto">
          <button class="btn btn-primary" type="submit" @click="showAlert">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "Sigup",
  setup() {
    const router = useRouter();
    const fullName = ref("");
    const userName = ref("");
    const pass = ref("");
    const phone = ref("");
    const email = ref("");

    const handleSubmit = async () => {
      const formData = {
        fullName: fullName.value,
        userName: userName.value,
        pass: pass.value,
        phone: phone.value,
        email: email.value,
      };
      console.log(formData);
      await axios
        .post("http://localhost:3000/api/auth/register", formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            router.push("/");
            toast.success("ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG", {
              autoClose: 3000,
            });
          } else {
            toast.warn("ĐĂNG KÝ THẤT BẠI, VUI LÒNG NHẬP ĐÚNG THÔNG TIN", {
              autoClose: 3000,
            });
          }
        })
        .catch((error) => console.log(error));
    };

    return {
      fullName,
      userName,
      pass,
      phone,
      email,
      handleSubmit,
    };
  },
};
</script>

<style scoped lang="scss">
.signin {
  padding: 20px;
  margin: 50px;
  // border-radius: 5px;
  border-image: linear-gradient(#f72585, #4cc9f0) 30;
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
}
</style>
