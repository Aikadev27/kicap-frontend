import axios from "axios";

class ProductService {
  static getProductData() {
    return axios.get("http://localhost:3000/api/product");
  }
  static getProductById(id) {
    return axios.get(`http://localhost:3000/api/product/${id}`);
  }
}

export default ProductService;
