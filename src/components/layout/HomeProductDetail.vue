<template>
  <ul class="product-card_container">
    <li v-for="data in datas" :key="data" class="product-card_list">
      <div class="row category-title">
        <h2>CÁC SẢN PHẨM NỔI BẬT</h2>
      </div>
      <ul class="row card-list">
        <li
          v-for="x in data"
          :key="x"
          class="col-lg-3 col-md-3 col-sm-6 col-xs-12 card-item"
        >
          <router-link :to="x.categoryId.type" class="link-to-category">
            <div class="product_card">
              <img :src="x.image" alt="" class="card_img" />
              <h4 class="card_type">{{ x.categoryId.type }}</h4>
              <h3 class="card_title">{{ x.name }}</h3>
            </div>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeProductDetail",
  props: ["datas"],
};
</script>

<style scoped lang="scss">
.product-card_container {
  margin-top: 20px;
  margin-bottom: 100px;
  .product-card_list {
    margin-top: 20px;
    margin-bottom: 20px;
    list-style: none;
    .category-title {
      text-align: center;
      margin: 40px 0;
      letter-spacing: 2px;
      h2 {
        font-size: 1.8rem;
        color: #dddddd;
      }
    }
    .card-list {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;

      .card-item {
        list-style: none;
        padding: 0 10px;
        .link-to-category {
          text-decoration: none;
          color: $text-color;
          .product_card {
            overflow: hidden;
            height: 100%;
            width: 100%;
            border-bottom: 1px solid #ccc;
            align-items: center;
            align-content: center;
            .card_img {
              max-height: 290px;
              height: 100%;
              object-fit: contain;
              border-radius: 2px;
              transition: all 0.3s ease-out;
              display: block;
              &:hover {
                transform: scale(1.05);
                cursor: pointer;
                opacity: 0.7;
              }
            }
            .card_type {
              text-transform: uppercase;
              font-size: 1.1rem;
              color: #bfbfbf;
              text-align: center;
              margin: 28px 0 10px 0;
            }
            .card_title {
              font-size: 1.4rem;
              text-align: center;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
