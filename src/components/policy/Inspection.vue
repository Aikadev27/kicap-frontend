<template>
  <div>
    <Banner />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="content-page rte">
            <p>
              Cám ơn quý khách đã quan tâm và truy cập vào website. Để thuận lợi
              cho quá trình sử dụng, phản hồi khiếu nại về sản phẩm, quý khách
              vui lòng quay video mở hộp sản phẩm ngay khi nhận được hàng.
            </p>
            <p>
              Khi phát hiện bất cứ vấn đề gì liên quan đến hình thức và số lượng
              cũng như chất lượng sản phẩm không giống như trên website mô tả,
              quý khách hãy liên hệ ngay cho Kicap qua hotline chăm sóc khách
              hàng&nbsp;0369.161.095 để được giải quyết nhanh nhất.
            </p>
            <p>
              Thời gian gửi các nội dung và phản hồi khiếu nại muộn nhất là 24h
              kể từ ngày quý khách nhận được hàng thành công.
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
  name: "Inspection",
  components: { Banner },
};
</script>

<style>
@import url("../../assets/sass/footer_style.scss");
</style>
