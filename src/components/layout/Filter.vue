<template>
  <div>
    <div class="filter">
      <h2 class="filter-title">TÌM THEO</h2>
      <h3 class="classicfied">Trạng thái tồn kho</h3>

      <ul class="filter-list">
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="availble" /><label
              for="availble"
              >Hàng có sẵn</label
            >
          </div>
        </li>
      </ul>
      <h3 class="classicfied">Tags</h3>

      <ul class="filter-list">
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="oem" /><label for="oem"
              >oem</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="asa" /><label for="asa"
              >asa</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="dyesub" /><label
              for="dyesub"
              >dyesub</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="doubleshot" /><label
              for="doubleshot"
              >doubleshot</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="pbt" /><label for="pbt"
              >pbt</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="abs" /><label for="abs"
              >abs</label
            >
          </div>
        </li>
      </ul>
      <h3 class="classicfied">Thương hiệu</h3>

      <ul class="filter-list">
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="miniLed" /><label
              for="miniLed"
              >Mini Led</label
            >
          </div>
        </li>
      </ul>
      <h3 class="classicfied">Giá sản phẩm</h3>

      <ul class="filter-list">
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac1" /><label
              for="bac1"
            ></label
            >Giá dưới 100.000đ
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac2" /><label for="bac2"
              >100.000đ - 200.000đ</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac3" /><label for="bac3"
              >200.000đ - 300.000đ</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac4" /><label for="bac4"
              >300.000đ - 500.000đ</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac5" /><label for="bac5"
              >500.000đ - 1.000.000đ</label
            >
          </div>
        </li>
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="bac6" /><label for="bac6"
              >Giá trên 1.000.000đ</label
            >
          </div>
        </li>
      </ul>
      <h3 class="classicfied">Loại</h3>

      <ul class="filter-list">
        <li class="filter-item">
          <div class="item">
            <input class="choose" type="checkbox" id="den" /><label for="den"
              >Đèn</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
};
</script>

<style scoped lang="scss">
.filter-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  margin-top: 20px;
}
.classicfied {
  font-size: 1.6rem;
  margin-bottom: 10px;
}
.filter-list {
  margin-bottom: 12px;
  margin-top: 12px;
  .filter-item {
    list-style: none;
    padding-left: 20px;
    .item {
      height: 20px;
      .choose {
        margin-right: 8px;
      }
      label {
        font-size: 1.2rem;
        line-height: 100%;
        &:hover {
          color: $text-hover-color;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
