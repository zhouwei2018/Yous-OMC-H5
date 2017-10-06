<style lang="less">
  @import "../resources/css/reset.less";
  @import "../resources/css/color.less";
  @import "../resources/css/base.less";

  [header]{
    .mint-popup{
      width:100%;
      position: fixed;
      left:0;
      top:0;
    }
  }

</style>
<template>
  <div header>
    <!--header start-->
    <header id="header" class="clearfix">

      <label class="side_nav side-nav" @click.native="popupVisible= true" v-on:click="showMenu">
        <img src="../resources/images/ys_more.png" width="20" alt="">
      </label>
      <!-- <a href="javascript:void(0);" class="detail-search">
          <input type="text" id="keyword" placeholder="请输入关键字搜索" value="" maxlength="50">
      </a>
      <i class="location_icon"></i> -->
    </header>
    <mt-popup v-model="popupVisible" position="left" class="mint-popup-3" :modal="false">
      <!--左侧登录div-->
      <div class="main-nav-wrapper sidenav">
        <div class="user-box clearfix">
          <img class="portrait" src="../resources/images/user/por_icon.png" alt="">
          <div class="user_name tc mb20">用户名</div>
          <div class="ys_function tc">
            <router-link :to="{path:'/list2'}" id="first_list_link">房源列表</router-link>
            <a href="javascript:;">房源信息采集</a>
            <a href="javascript:;">待办任务</a>
          </div>
        </div>
        <a href="javascript:;" class="log_out_btn" @click="login_out">退出登录</a>
      </div>
    </mt-popup>
  </div>
  <!--header end-->
</template>
<script type="text/babel">
  import $ from 'jquery'
  export default {
    data() {
      return {
        popupVisible: false
      };
    },
    methods: {
      showMenu() {
        this.popupVisible = true;
        var wwd = $("#section").width();
        if (!wwd) {
          wwd = $(".section").width();
        }
        var wgd = $(window).height() + 50;
        $("body").prepend('<div id="zhezhao"></div>');
        $("#zhezhao").css({
          width: "" + wwd + "px",
          height: "" + wgd + "px",
          "background-color": "#000",
          "z-index": "12",
          opacity: "0.5",
          position: "absolute",
          top: "0px",
          left: "0px"
        });

        $(".sidenav").css("left", "-100%");
        $(".sidenav").show();
        $("#zhezhao").animate({
          left: "75%"
        }, 150);
        $("#zhezhao").animate({
          backgroundColor: "#000000"
        }, 150);

        $(".sidenav").css({
          height:$(window).height()
        });

        $(".sidenav").animate({
          left: "0"
        }, 150, function () {
          $('html').css({'height': '100%', 'overflow': 'hidden'});
          $('body').css({'height': '100%', 'overflow': 'hidden'});
          $("#zhezhao").on("click",
            function () {
              $('.sidenav').animate({
                left: '-100%'
              }, 150, function () {
                $('.sidenav').hide();
              });
              $("#section").animate({
                left: '0'
              }, 150);
              $(".section").animate({
                left: '0'
              }, 150);
              this.popupVisible = false;
              $("#zhezhao").remove();
              $('html').css({'height': 'auto', 'overflow': 'auto'});
              $('body').css({'height': 'auto', 'overflow': 'auto'});
            }
          )
        });
        $("#section").animate({
          left: "75%"
        }, 150);
        $(".section").animate({
          left: "75%"
        }, 150);

      },

      login_out(){
        $("#zhezhao").remove();
          this.$router.push({path:'/login'});
      }

    },
    mounted: function () {
      var _this = this;
      $('#first_list_link').click(function(){
        $("#zhezhao").remove();
      });
    }
  };
</script>
