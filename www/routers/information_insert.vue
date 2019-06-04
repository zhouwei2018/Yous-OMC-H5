<style scoped lang="less">

  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

  .search-out {
    background-color: #fff;
    border: 1px solid transparent;
    .search-line {
      height: .60rem;
      margin: .12rem 0;
      display: -moz-box;
      display: -webkit-box;
      display: box;
      background-color: #fff;
      .p-u {
        width: 1.06rem;
        position: absolute;
        left: 0rem;
        top: .45rem;
      }
      .input-out {
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        box-flex: 1;
        margin-right: .34rem;
        margin-left: .9rem;
        height: .60rem;
        padding-left: .62rem;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        font-size: .20rem;
        border-radius: .6em;
        border: 1px solid #cecece;
        position: relative;
        &:before {
          content: "";
          display: block;
          position: absolute;
          left: .36rem;
          top: 50%;
          margin-left: -.10rem;
          margin-top: -.10rem;
          width: .20rem;
          height: .20rem;
          background: url("../resources/images/icons/search.png") no-repeat center center;
          background-size: contain;
        }
        input {
          font-size: .20rem;
          line-height: 1em;
        }
      }
      .p-u {
        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -.15rem;
          margin-top: -.165rem;
          width: .30rem;
          height: .33rem;
          background: url("../resources/images/icons/p-icon.png") no-repeat center center;
          background-size: contain;
        }
      }
    }
  }

  .filer-out {
    margin-bottom: .22rem;
    background-color: #fff;
    border: 1px solid transparent;
    border-bottom: 1px solid #dbdadf;
    ul {
      height: .62rem;
      display: -moz-box;
      display: -webkit-box;
      display: box;
      li {
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        box-flex: 1;
        margin-top: .16rem;
        margin-bottom: .23rem;
        font-size: .21rem;
        text-align: center;
        a {
          display: block;
          border-right: 1px solid #cbcbcb;
          span, i {
            display: inline-block;
            vertical-align: middle;
            position: relative;
          }
          span {
            top: -.03rem;
          }
          i {
            margin-left: .08rem;
            top: -.01rem;
            width: .15rem;
            height: .07rem;
            background: url("../resources/images/icons/down_arrow.png") no-repeat center center;
            background-size: contain;
          }
        }
        &:last-child {
          a {
            border-right: 0;
          }
        }
      }
    }
  }

  .list-out {
    background-color: #fff;
    ul {
      li {
        position: relative;
        padding: .24rem .20rem;
        .img-out {
          float: left;
          width: 1.98rem;
          height: 1.48rem;
          img {
            border: 0;
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .pre-title {
          float: left;
          height: 1.48rem;
          margin-left: .20rem;
          h1 {
            font-size: .26rem;
            line-height: .39rem;
          }
          .address {
            font-size: .20rem;
            line-height: .34rem;
            color: #8e8e8e;
          }
          .price-size {
            margin-top: .36rem;
            color: #f61f3a;
            font-size: .30rem;
            line-height: .40rem;
            span {
              &:last-child {
                margin-left: .12rem;
                color: #8e8e8e;
                font-size: .18rem;
              }
            }

          }
          .next {
            position: absolute;
            width: .12rem;
            height: .20rem;
            right: .20rem;
            top: 50%;
            margin-top: -.1rem;
            background: url(../resources/images/next.png) no-repeat center center;
            background-size: contain;
          }
        }
        border-bottom: 1px solid #dbdadf;
      }
    }
  }

  //遮罩内容
  .float-part {
    position: fixed;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 6.6rem;
    background-color: @cl_white;
    z-index: 1000;
    .bulid_msg_item {
      float: left;
      width: 25%;
      text-align: center;
      height: 1.6rem;
      i {
        width: .65rem;
        height: .55rem;
        display: block;
        margin: .5rem auto .2rem;
        &.basic_01 {
          background: url("../resources/images/icons/basic_icon/basic01.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_02 {
          background: url("../resources/images/icons/basic_icon/basic02.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_03 {
          background: url("../resources/images/icons/basic_icon/basic03.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_04 {
          background: url("../resources/images/icons/basic_icon/basic04.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_05 {
          background: url("../resources/images/icons/basic_icon/basic05.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_06 {
          background: url("../resources/images/icons/basic_icon/basic06.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_07 {
          background: url("../resources/images/icons/basic_icon/basic07.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_08 {
          background: url("../resources/images/icons/basic_icon/basic08.png") no-repeat;
          background-size: .65rem .55rem;
        }
      }
    }
  }

  .bulid_msg_last {
    display: block;
    width: 1.2rem;
    text-align: center;
    margin: 0 auto;
    i {
      width: .65rem;
      height: .55rem;
      display: block;
      margin: .5rem auto .2rem;
      background: url("../resources/images/icons/basic_icon/basic09.png") no-repeat;
      background-size: .65rem .55rem;
    }
  }

  .msg_progress_bar {
    position: relative;
    margin-top: .5rem;
    height: .24rem;
    line-height: .24rem;
    background-color: @bg_btn_gray;
    text-align: center;
    .finish_bar {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50%;
      background-color: @bg_mid_blue;
    }
    .progress_text {
      position: absolute;
      right: .25rem;
      top: 0;

    }
  }

  .close {
    font-size: @font54;
    width: .54rem;
    display: block;
    margin: .1rem auto;
  }

  //遮罩
  .shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: @cl_000;
    opacity: .7;
    display: none;
  }


</style>
<template>
  <div class="all_elements">
    <section class="search-out">
      <div class="search-line">
        <div href="javascript:void(0);" class="p-u"></div>
        <div class="input-out">
          <input type="text" placeholder="请输入关键字搜索"/>
        </div>
      </div>
    </section>
    <section class="filer-out">
      <ul>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>位置</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>价格</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>面积</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
      </ul>
    </section>
    <div class="list-out">
      <ul>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png"/>
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p class="address">朝阳区建国门外大街4号</p>
            <p class="price-size"><span>￥7.0元/m/天</span><span>120-400m</span></p>
            <div class="next"></div>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png"/>
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p class="address">朝阳区建国门外大街4号</p>
            <p class="price-size"><span>￥7.0元/m/天</span><span>120-400m</span></p>
            <div class="next"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="shadow"></div>
    <div class="float-part" id="msg_super_wrap">
      <div class="line-one clearfix">
        <router-link class="bulid_msg_item" :to="{path:'/build_msg'}">
          <i class="basic_01"></i>
          <span>基本信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/elevator_msg'}">
          <i class="basic_02"></i>
          <span>电梯信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/area_msg'}">
          <i class="basic_03"></i>
          <span>面积信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/households_msg'}">
          <i class="basic_04"></i>
          <span>户数信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/price_msg'}">
          <i class="basic_05"></i>
          <span>价格信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/image_msg'}">
          <i class="basic_06"></i>
          <span>图片信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/rent_msg'}">
          <i class="basic_07"></i>
          <span>租赁部信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/property_msg'}">
          <i class="basic_08"></i>
          <span>物业信息</span>
        </router-link>
      </div>
      <div class="build_bot_msg">
        <router-link class="bulid_msg_last" :to="{path:'/house_msg'}">
          <i></i>
          <span>房源信息</span>
        </router-link>
      </div>
      <div class="msg_progress_bar">
        <div class="finish_bar"></div>
        <span class="pr">信息完成比例</span>
        <span class="progress_text">50%</span>
      </div>
      <div class="close" id="close_msg">&times;</div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },

    data () {
      return {}
    },
    methods: {},
    mounted(){
      $('.ys_listcon').click(function () {
        $('.shadow').show();
        $('#msg_super_wrap').animate({
          bottom: 0
        });
      });

      $('#close_msg,.shadow').click(function (e) {
        e.stopPropagation();
        $('#msg_super_wrap').animate({
          bottom: '-100%'
        });
        $('.shadow').hide();
      });

    },
  }
</script>
