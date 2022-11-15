<style scoped>
.container {
  width: 917px;
  height: 343px;
}
.item-img {
  position: relative;
  height: 110px;
}
.item-img img {
  width: 220px;
  height: 110px;
}
.f-left {
  float: left;
  font-size: 12px;
  color: #999999;
  height: 30px;
  line-height: 30px;
}
.f-right {
  float: right;
  font-size: 12px;
}
.item {
  width: 220px;
  margin-bottom: 12px;
  text-align: center;
}
.posi {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.price {
  font-size: 18px;
  color: #ff6600;
}

.f-right sup {
  font-size: 9px;
  color: #666666;
}
.miaoshu {
  width: 210px;
  font-size: 12px;
  text-align: left;
  padding: 0 7px;
  margin-top: 8px;
  margin-bottom: 12px;
  color: #666666;
  overflow: hidden;
}
.item-bottom {
  padding: 0 7px;
  vertical-align: center;
}
.temai {
  position: absolute;
  top: 0;
  left: 15px;
  background-image: url(../assets/images/un_sprite_tag.png);
  /* background-size: 100%; */
  width: 40px;
  height: 35px;
  color: white;
  text-align: center;
  font-size: 12px;
}
.item-img .tip {
  width: 220px;
  overflow: hidden;
  position: absolute;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  color: white;
  bottom: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.5);
}
</style>
<template>
  <div class="container">
    <div class="posi">
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
          <div class="temai">特卖</div>
          <div class="tip">只卖3天，套餐卖价格等于外网一间房间...</div>
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div class="miaoshu">无锡2日晚自由行(5钻)·【5.23-5.25抢...</div>
        <div class="item-bottom">
          <div class="f-left">席位充足</div>
          <div class="f-right">
            <sup>￥</sup><span class="price">350</span><span>起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>