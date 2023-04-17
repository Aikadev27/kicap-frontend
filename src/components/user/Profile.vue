<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h1 class="text-center">THÔNG TIN KHÁCH HÀNG</h1>
      </div>
    </div>
    <form class="profile mx-auto" @submit.prevent="updateData">
      <div class="row">
        <div class="col-lg-12">
          <label for="email" class="col-lg-2">Địa chỉ email</label>
          <input
            type="email"
            :placeholder="user.email"
            class="col-lg-6 allow_edit"
            name="email"
            v-model="formData.email"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label for="fullName" class="col-lg-2">Họ và tên</label>
          <input
            type="text"
            :placeholder="user.fullName"
            class="col-lg-6 allow_edit"
            name="fullName"
            v-model="formData.fullName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label for="userName" class="col-lg-2">Tên đăng nhập</label>
          <input
            type="text"
            :placeholder="user.userName"
            class="col-lg-6 allow_edit"
            name="userName"
            v-model="formData.userName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label for="phone" class="col-lg-2">Số điện thoại</label>
          <input
            type="text"
            :placeholder="user.phone"
            class="col-lg-6 allow_edit"
            name="phone"
            v-model="formData.phone"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p>
            Nếu bạn muốn cập nhật thông tin, vui lòng điền thông tin cần cập
            nhật vào ô thông tin và nhất "cập nhật"
          </p>
        </div>
      </div>
      <div class="button col-md-2 col-lg-2">
        <button class="btn btn-primary" type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "../../store/authStore";
// import AuthService from "../../services/auth.service";
// import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { reactive } from "vue";
import axios from "axios";
export default {
  name: "Profile",
  setup() {
    const useStore = useAuthStore();
    const user = useStore.user;
    const formData = reactive({
      email: user.email,
      fullName: user.fullName,
      userName: user.username,
      phone: user.phone,
    });

    const updateData = async () => {
      await axios
        .patch(`http://localhost:3000/api/auth/update/${user._id}`, formData)
        .then((res) => {
          console.log(res.data);
          toast.success("Cập nhật thành công!", {
            autoClose: 2000,
          });
        })
        .catch((error) => console.log(error));
    };
    return { user, updateData, formData };
  },
};
</script>

<style scoped lang="scss">
h1 {
  margin-top: 20px;
}
.profile {
  margin: 20px 20px;
  padding: 0 20px;
  label {
    font-size: 1.8rem;
    margin: 10px 0;
    font-style: italic;
    font-weight: bolder;
  }
  input {
    font-size: 1.5rem;
    padding: 10px 10px;
    margin: 20px 0;
    letter-spacing: 2px;
    // border-radius: 4px;
    // border-color: #fff;
    border-image: linear-gradient(#f72585, #4cc9f0) 10;
  }
}
</style>
