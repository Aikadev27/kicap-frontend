import client from "../utils/client";
class CartService {
  static addtoCart(data) {
    return client.post("cart/add", data);
  }
  static getCart() {
    return client.get("cart/mycart");
  }
}

export default CartService;
