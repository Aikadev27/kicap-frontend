<template>
  <div>
    <Banner />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="content-page rte">
            <p>A. Chính sách đổi hàng</p>
            <p>
              - Kicap chỉ hỗ trợ đổi hàng trong trường hợp sản phẩm của quý
              khách được mua tại Kicap và&nbsp;còn nguyên tem mac và hình thức
              như mới trong thời gian tối đa 3 ngày kể từ khi nhận hàng.
            </p>
            <p>
              - Đối với các trường hợp sản phẩm lỗi (có video mở hộp khi nhận
              hàng), Kicap hỗ trợ đổi trả trực tiếp cho quý khách sản phẩm mới
              trong 15 ngày đầu tiên sử dụng, chỉ áp dụng với các sản phẩm trong
              danh mục bảo hành. Tham khảo chính sách bảo hành của Kicap.
            </p>
            <p>B. Chính sách trả hàng hoàn tiền</p>
            <p>
              - Kicap hỗ trợ trả hàng hoàn tiền cho quý khách đối với bất cứ đơn
              hàng nào mà quý khách không hài lòng về chất lượng sản phẩm với
              điều kiện sản phẩm của quý khách còn nguyên tem mác, chưa rơi vỡ
              hay can thiệp vào bên trong phần cứng và phầm mềm của sản phẩm.
            </p>
            <p>
              - Hình thức hoàn tiền: Kicap sẽ chuyển khoản lại&nbsp;cho quý
              khách ngay khi nhận được hàng.
            </p>
            <p>
              - Đối với các đơn hàng ở xa, quý khách xin vui lòng thanh toán phí
              vận chuyển khi gửi trả hàng lại cho Kicap.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../layout/Banner.vue";

export default {
  name: "Refund",
  components: { Banner },
};
</script>

<style>
@import url("../../assets/sass/footer_style.scss");
</style>
