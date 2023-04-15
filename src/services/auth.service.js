import axios from "axios";

class AuthService {
  async submitForm() {
    await axios.post("http://localhost:3000/api/auth/signup");
  }
}
