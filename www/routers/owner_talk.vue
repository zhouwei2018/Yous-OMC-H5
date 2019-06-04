<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue{color:@bg_mid_blue}
  .color_black{color:@cl_black}
  .mb20{
    margin-bottom: .2rem;
  }
  .bg_grey{
    background:@bg_lightgay!important;
  }
  .bd{
    font-weight: bold;
  }
  .mf36{
    margin-left: .36rem;
  }
  .all_elements{
    font-size: .26rem;
    .build-in{
      padding-left: .24rem;
      height: .74rem;
      line-height: .74rem;
    }
    .top-part{
      background: @cl_white;
      border-bottom: 1px solid #dbdadf;
      textarea,.btn-out{
        display: block;
        min-width:94%;
        max-width:94%;
        margin: 0 auto;
        border-radius: .18rem;
        border:.01rem solid #4d4d4d;
      }
      .btn-out{
        display: block;
        margin:0 auto;
        padding: .16rem 0;
        min-width:94%;
        max-width:94%;
        border-radius:0;
        border:0;
        button{
          float:right;
          border: 0;
          width: 1.48rem;
          height: .44rem;
          line-height: .44rem;
          text-align: center;
          font-size: .26rem;
          color: @cl_white;
          background:@bg_mid_blue;
          border-radius: .12rem;
        }
      }
    }
    .ys_item_ul li{
      border-top: 1px solid #dbdadf;
      text-align: right;
      span{
        &:first-child{
          margin-right: .16rem;
        }
        &.sgl{
          float: left;
        }
      }
      .ys_tit{
        float: left;
        position: relative;
        width: 1.45rem;
        height: .72rem;
        margin-right: .18rem;
        &:after{
          content:':';
          position: absolute;
          right:0;
        }
        &.nor {
          &:after {
            content: '';
            display: none;
          }
        }
      }
      .arrow{
        float:right;
        margin-right: .30rem;
      }
    }
  }



</style>
<template>
  <div class="all_elements">
    <div class="top-part mb20">
      <div class="build-in">建外SOHO A座 2201</div>
      <textarea placeholder="请输入"></textarea>
      <div class="btn-out clearfix">
        <button class="add">添加</button>
      </div>

    </div>
    <ul class="ys_item_ul">
      <li class="mb20">
        <span class="sgl">收购约见</span>
        <span>选择记录类型</span>
        <span class="arrow">&gt;</span>
      </li>
      <li>
        <span>@相关人员</span>
        <span class="arrow">&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';
  export default {
    components: {
      InfiniteScroll
    },

    data () {
      return {}
    },
    methods: {},
    mounted(){

    },
  }
</script>
