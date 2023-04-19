// import axios from "axios";
import client from "../utils/client";

class ProductService {
  static getProductData() {
    return client.get("product");
  }
  static getProductById(id) {
    return client.get(`product/${id}`);
  }
}

export default ProductService;
