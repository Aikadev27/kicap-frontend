<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-3">
          <h3 class="title">
            <router-link to="/" class="wrap-logo">
              <img src="../../assets/imgs/logo.png" alt="" class="logo" />
            </router-link>
          </h3>
          <ul class="list-menu">
            <li class="list-item">
              <font-awesome-icon
                icon="fa-solid fa-certificate"
                class="icon"
              />Chứng nhận ĐKHKD số: 01B8021375 do phòng TC-KH UBND quận Tây Hồ
              cấp ngày 13/07/2022
            </li>
            <li class="list-item">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="icon"
              />33A, ngõ 575 Kim Mã, Ba Đình, Hà Nội
            </li>
            <li class="list-item">
              <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
              <router-link to="/" class="link"> 0369161095 </router-link>
            </li>
            <li class="list-item">
              <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
              <router-link to="/" class="link">kicap.vn@gmail.com</router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <h3 class="title upperCase">Dịch vụ khách hàng</h3>
          <ul class="list-menu">
            <li class="list-item upperCase">
              <router-link to="/dich-vu" class="link">
                hướng dẫn mua hàng
              </router-link>
            </li>
            <li class="list-item upperCase">
              <router-link to="/dich-vu" class="link">
                điều khoản và dịch vụ
              </router-link>
            </li>
            <li class="list-item upperCase">
              <router-link to="/dich-vu" class="link">
                QUY TRÌNH GIAO HÀNG
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <h3 class="title upperCase">Chính sách khách hàng</h3>
          <ul class="list-menu">
            <li class="list-item upperCase">
              <router-link to="/chinh-sach" class="link">
                CHÍNH SÁCH BẢO HÀNH
              </router-link>
            </li>
            <li class="list-item upperCase">
              <router-link to="/chinh-sach" class="link">
                chính sách kiểm hàng
              </router-link>
            </li>
            <li class="list-item upperCase">
              <router-link to="/chinh-sach" class="link">
                chính sách bảo hành
              </router-link>
            </li>
            <li class="list-item upperCase">
              <router-link to="/chinh-sach" class="link">
                chính sách trả hàng hoàn tiền
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3">
          <h3 class="title upperCase">đăng kí nhận tin</h3>
          <ul class="list-menu">
            <li class="list-item">
              Mua bàn phím cơ, keycap bộ, keycap lẻ, keycap resin. Bảo hành
              chính hãng. Ưu đãi khi mua online. Dịch vụ mods phím cơ uy tín,
              chất lượng.
            </li>
            <form action="#">
              <input type="email" placeholder="Email của bạn" />
              <button>Đăng Kí</button>
            </form>
            <li class="list-item"></li>
            <div class="payment">
              <ul class="payment-list">
                <li class="payment-item">
                  <img
                    src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/payment_1.svg?1678005082629"
                    alt=""
                  />
                </li>
                <li class="payment-item">
                  <img
                    src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/payment_2.svg?1678005082629"
                    alt=""
                  />
                </li>
                <li class="payment-item">
                  <img
                    src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/payment_3.svg?1678005082629"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy-right">© Copyright 2021 | Kicap | All Rights Reserved</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.title {
  font-size: 16px;
  color: var(--text-color);
  font-weight: 500;
  padding: 13px 0;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.list-item.upperCase {
  text-transform: uppercase;
}
.logo {
  max-height: 60px;
  object-fit: contain;
  width: 100%;
  margin: auto auto;
}
.list-menu {
  padding: 0;
}
.list-item {
  list-style: none;
  font-size: 13px;
  color: var(--text-color);
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 7px;
  :first-child {
    @include hover-text;
  }
}
.icon {
  width: 12px;
  height: 12px;
  margin-right: 8px;
  position: absolute;
  left: -10%;
  top: 10%;
}
.link {
  color: var(--text-color);
  text-decoration: none;
}
.link:hover {
  color: var(--text-hover-color);
  transition: 0.3s;
}
form input {
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid transparent;
  margin-bottom: 8px;
  padding: 0 10px;
  font-size: 13px;
}
form button {
  color: #fff;
  background-color: #000;
  width: 100%;
  height: 40px;
  border: solid 1px #000;
}
form button:hover {
  background-color: var(--text-hover-color);
  transition: 0.3s;
  color: var(--text-color);
  opacity: 0.4;
}
/* payment */
.payment {
  text-align: center;
}
.payment-list {
  margin-top: 14px;
}
.payment-item {
  display: inline-block;
  padding: 0 10px;
  list-style: none;
}
.copy-right {
  border-top: 1px solid #ebebeb;
  width: 100%;
  text-align: center;
  padding: 8px;
  font-size: 12px;
  font-weight: bolder;
}
</style>
