import axios from "axios";
import client from "../utils/client";

class AuthService {
  async getUser() {
    await axios
      .get("http://localhost:3000/api/auth")
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
  async getUserById() {
    await axios
      .get("http://localhost:3000/api/:_id")
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
  async register() {
    await axios
      .post("http://localhost:3000/api/auth/register")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }
  async login(userName, pass) {
    await axios
      .post("http://localhost:3000/api/auth/login", { userName, pass })
      .then(() => console.log("dang nhap thanh cong"))
      .catch((error) => console.log(error));
  }
  static async update(form) {
    await client
      .patch("auth/update", form)
      .then(() => console.log("cap nhat thanh cong"))
      .catch((error) => console.log(error));
  }
  static auth() {
    return client.get("auth");
  }
}

export default AuthService;
