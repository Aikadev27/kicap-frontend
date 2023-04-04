<template>
  <div class="header">
    <div class="container top-header">
      <div class="row">
        <div class="col-lg-5 col-xl-5 number-phone">
          HOTLINE TƯ VẤN:<a href="#">0369161095</a>
        </div>
        <div class="col-lg-2 col-xl-2">
          <router-link class="router-link" to="/"
            ><img src="../../assets/imgs/logo.png" alt="kicap.vn" class="logo"
          /></router-link>
        </div>
        <ul class="col-lg-5 col-xl-5 contact">
          <li class="contact-item">
            <router-link to="/account" class="contact-item-link"
              >TÀI KHOẢN</router-link
            >
          </li>
          <li class="contact-item">
            <router-link to="/cart" class="contact-item-link"
              >GIỎ HÀNG</router-link
            >
          </li>
          <li class="contact-item">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-0">
          <ul class="bot-header">
            <li class="bot-item">
              <router-link class="router-link" to="/">TRANG CHỦ</router-link>
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/keycap bo"
                >KEYCAP BỘ <font-awesome-icon :icon="['fass', 'caret-down']"
              /></router-link>
              <ul class="drop-down">
                <li class="drop-down-items bot-item">
                  <router-link to="/keycap bo" class="router-link"
                    >Keycap Cherry</router-link
                  >
                </li>
                <li class="drop-down-items bot-item">
                  <router-link to="/keycap bo" class="router-link"
                    >Keycap SA</router-link
                  >
                </li>
                <li class="drop-down-items bot-item">
                  <router-link to="/keycap bo" class="router-link"
                    >Keycap XDA</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/mod phim"
                >MODS PHÍM</router-link
              >
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/keycap le"
                >KEYCAP LẺ</router-link
              >
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/combo chat"
                >COMBO CHẤT</router-link
              >
            </li>
            <li class="bot-item mega-content">
              <router-link class="router-link" to="/san pham"
                >SẢN PHẨM <font-awesome-icon :icon="['fass', 'caret-down']"
              /></router-link>
              <div class="supper-dropdown">
                <li class="supper-drop-item">
                  <router-link
                    to="/keycap bo"
                    class="router-link supper-drop-link"
                    >Kycap bộ</router-link
                  >
                  <ul class="supper-child">
                    <li class="supper-child-item">Jamon ABS</li>
                    <li class="supper-child-item">SA PBT Chalk</li>
                    <li class="supper-child-item">SA Aifei Monster</li>
                  </ul>
                </li>
                <li class="supper-drop-item">
                  <router-link
                    to="/keycap le"
                    class="router-link supper-drop-link"
                    >Kycap lẻ</router-link
                  >
                  <ul class="supper-child">
                    <li class="supper-child-item">Pikachu Alu</li>
                    <li class="supper-child-item">Card VGA</li>
                    <li class="supper-child-item">Cờ Đảng Búa liềm</li>
                  </ul>
                </li>
                <li class="supper-drop-item">
                  <router-link to="/swich" class="router-link supper-drop-link"
                    >Switch</router-link
                  >
                  <ul class="supper-child">
                    <li class="supper-child-item">Gateron Pro Milky Yellow</li>
                    <li class="supper-child-item">Fantasy Virus</li>
                    <li class="supper-child-item">Kailh Box White</li>
                  </ul>
                </li>
                <li class="supper-drop-item">
                  <router-link
                    to="/phu kien"
                    class="router-link supper-drop-link"
                    >PHỤ KIỆN</router-link
                  >
                  <ul class="supper-child">
                    <li class="supper-child-item">Núm xoay NJ80</li>
                    <li class="supper-child-item">Dụng cụ thay keycap</li>
                    <li class="supper-child-item">Chổi quét phím</li>
                  </ul>
                </li>

                <li class="supper-drop-item">
                  <router-link to="/kit" class="router-link supper-drop-link"
                    >KIT</router-link
                  >
                  <ul class="supper-child">
                    <li class="supper-child-item">KIT NJ80</li>
                    <li class="supper-child-item">MK870 3 mode</li>
                    <li class="supper-child-item">Akko MOD007</li>
                  </ul>
                </li>
              </div>
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/blog">BLOG</router-link>
            </li>
            <li class="bot-item">
              <router-link class="router-link" to="/about"
                >VỀ KICAP <font-awesome-icon :icon="['fass', 'caret-down']"
              /></router-link>
              <ul class="drop-down">
                <li class="drop-down-items bot-item">
                  <router-link to="/" class="router-link"
                    >Giới thiệu</router-link
                  >
                </li>
                <li class="drop-down-items bot-item">
                  <router-link to="/" class="router-link">Liên hệ</router-link>
                </li>
                <li class="drop-down-items bot-item">
                  <router-link to="/" class="router-link"
                    >Chính sách bảo hành</router-link
                  >
                </li>
                <li class="drop-down-items bot-item">
                  <router-link to="/" class="router-link"
                    >Chính sách đổi trả</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    focusOn(e) {
      this.isActive = e;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  margin-top: 10px;
  padding: 10px 0;
  .top-header {
    border-bottom: 1px solid $border-color;
    .logo {
      max-width: 140px;
    }
    .number-phone {
      display: flex;
      font-size: $font-size;
      align-items: center;
      a {
        font-size: $font-size;
        text-decoration: none;
        color: $text-color;
        font-weight: bolder;
        letter-spacing: 0.2rem;
        margin-left: 0.2rem;
        @include hover-text;
      }
    }
    .contact {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .contact-item {
        padding: 0 2px;
        margin-left: 12px;
        list-style: none;
        font-size: $font-size;
        // &:hover {
        //   color: $text-hover-color;
        //   transition: 0.2s;
        // }
      }
      .contact-item-link {
        color: $text-color;
        cursor: pointer;
        @include hover-text;
        text-decoration: none;
      }
    }
  }
  .bot-header {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 10px;

    .bot-item {
      list-style-type: none;
      position: relative;
      .router-link {
        text-decoration: none;
        font-size: 1.5rem;
        color: $text-color;
        @include hover-text;
        padding: 0 10px;
      }
      .drop-down {
        width: calc(100% + 100px);
        border: 1px solid $border-color;
        position: absolute;
        background-color: #fff;
        z-index: 99;
        display: none;
        margin-top: 20px;

        animation: fadeIn ease-in-out 0.3s;

        top: 80%;
        .router-link {
          font-size: 18px;
          font-weight: lighter;
          width: 100%;
          display: block;
          padding: 10px;
        }
        @include stair;
      }
      &:hover .drop-down {
        display: block;
      }
    }
    .bot-item.mega-content {
      position: static;

      &:hover .supper-dropdown {
        display: flex;
      }
      .supper-dropdown {
        margin-top: 20px;
        width: 100%;
        max-width: 1150px;
        flex-wrap: wrap;
        justify-content: flex-start;
        position: absolute;
        max-height: 500px;
        left: calc(50% - 25%);
        border: 1px solid $border-color;
        animation: fadeIn ease-in-out 0.3s;
        display: none;
        background-color: #fff;
        z-index: 99;
        @include box-shadow;

        @include stair;
        .supper-drop-item {
          width: 33.3333%;
          margin-top: 4px;
          padding: 6px 0;

          .supper-drop-link {
            font-weight: bolder;
            font-size: 18px;
            margin-bottom: 4px;
            display: block;
          }
          .supper-child {
            padding: 5px 10px;
            .supper-child-item {
              list-style: none;
              font-size: 1.4rem;
              @include hover-text;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
