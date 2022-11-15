<style scoped>
.container {
  width: 1258px;
  height: 413px;
}
.xiaomi {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 15px;
}
.pic {
  width: 135px;
  height: 160px;
  margin-bottom: 50px;
  margin-top: 20px;
}
.item {
  cursor: pointer;
  padding: 42px 0;
  width: 25%;
}
.item:hover {
  box-shadow: 0px 10px 20px #dddbdd;
  border-radius: 10px;
  margin-top: -10px;
}
.item .title {
  width: 80px;
  height: 27px;
  background-color: #83c44e;
  margin: 0 auto;
  line-height: 27px;
  color: white;
}
.item .type {
  font-size: 18px;
}
.item .tip {
  color: #b0afb0;
  margin-bottom: 24px;
  font-size: 13px;
}
.item .price {
  font-size: 17px;
  color: #e5602a;
}
</style>
<template>
  <div class="container">
    <div class="xiaomi">
      <div class="item">
        <div class="title">新品</div>
        <img class="pic" src="../assets/images/4-xiaomi_03.gif" alt="" />
        <div class="type">小米9&nbsp;6GB+128GB</div>
        <div class="tip">骁龙855,索尼4800万超广角微距三摄</div>
        <div class="price">2999元</div>
      </div>
      <div class="item">
        <div class="title">新品</div>
        <img class="pic" src="../assets/images/4-xiaomi_05.gif" alt="" />
        <div class="type">小米9&nbsp;SE&nbsp;6GB+64GB</div>
        <div class="tip">索尼4800万超广角微距三摄,骁龙712</div>
        <div class="price">1999元</div>
      </div>
      <div class="item">
        <div class="title">新品</div>
        <img class="pic" src="../assets/images/4-xiaomi_06.gif" alt="" />
        <div class="type">Redmi Note 7&nbsp;3GB+32GB</div>
        <div class="tip">4800拍照千元机，18个月超长质保</div>
        <div class="price">999元</div>
      </div>
      <div class="item">
        <div class="title">新品</div>
        <img class="pic" src="../assets/images/4-xiaomi_08.gif" alt="" />
        <div class="type">小米Play&nbsp;4GB+64GB</div>
        <div class="tip">5.84"小水滴全面屏，后置1200万 AI...</div>
        <div class="price">1099元</div>
      </div>
    </div>
  </div>
</template>