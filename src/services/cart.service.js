import client from "../utils/client";
class CartService {
  static addtoCart(data) {
    return client.post("cart/add", data);
  }
  static getCart() {
    return client.get("cart/mycart");
  }
  static async deleteProduct(productId) {
    await client
      .delete("cart/delete/" + productId)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }
}

export default CartService;
