<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue{color:@bg_mid_blue}
  .color_black{color:@cl_black}
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
  }
  .ys_item_ul li .ys_tit{
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
  .shadow{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 1;
    background:rgba(255,255,255,0.7);
  }
  .float-part{
    width: 100%;
    max-width: 7.5rem;
    padding-top: .26rem;
    position: fixed;
    bottom:0;
    z-index: 2;
    .line-one{
      margin:0 .64rem .34rem;
      a{
        float: left;
        display: block;
        width: .98rem;
        height: 1.38rem;
        position: relative;
        padding-top: 1.12rem;
        text-align: center;
        font-size: .18rem;
        line-height: 1.2em;
        &:before{
          content: '';
          position: absolute;
          top:0;
          left: 0;
          width: .98rem;
          height: .98rem;
          border-radius: .49rem;
          background: url('../resources/images/a.png') center center no-repeat;
          background-size: contain;
        }
        &:nth-child(1), &:nth-child(2), &:nth-child(3){
          margin-right: .748rem;
        }
        &:nth-child(2){
          &:before{
            background: url('../resources/images/b.png') center center no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(3){
          &:before{
            background: url('../resources/images/c.png') center center no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(4){
          &:before{
            background: url('../resources/images/d.png') center center no-repeat;
            background-size: contain;
          }
        }
      }
    }
    .last{
      position: relative;
      margin:0 auto 1.40rem;
      display: block;
      width: .98rem;
      height: 1.38rem;
      padding-top: 1.12rem;
      text-align: center;
      font-size: .18rem;
      line-height: 1.2em;
      &:before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: .98rem;
        height: .98rem;
        border-radius: .49rem;
        background: url('../resources/images/f.png') center center no-repeat;
        background-size: contain;
      }
    }
  }
  .close{
    position: absolute;
    bottom:.24rem;
    left: 50%;
    width: .24rem;
    height: .24rem;
    background: url('../resources/images/close.png') center center no-repeat;
    background-size: contain;

  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix color_blue">
          <span class="ys_tit">查看跟进</span>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201 业主约见谈判</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">派单时间</span>
          <span class="">2017-11-12</span><span class="mf36">14:00</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房屋面积</span>
          <div class="ys_item_con fl">230 m</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">装修</span>
          <div class="ys_item_con fl">毛胚</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见人身份</span>
          <div class="ys_item_con fl">代理人</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">与业主关系</span>
          <div class="ys_item_con fl">朋友</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见人姓名</span>
          <div class="ys_item_con fl">张三</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见人电话</span>
          <div class="ys_item_con fl">132222222222</div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见时间</span>
          <span class="">2017-11-12</span><span class="mf36">14:00</span>
        </li>
        <li class="clearfix bg_grey">
          <span class="ys_tit">约见人</span>
          <span class="">李四</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主拓展</span>
          <span class="">张三</span>
        </li>
      </ul>
    </div>
    <div class="shadow"></div>
    <div class="float-part">
      <div class="line-one clearfix">
        <a href=":;">写跟进</a>
        <a href=":;">形成约见</a>
        <a href=":;">日程提醒</a>
        <a href=":;">派发商机</a>
      </div>
      <a class="last">拨打电话</a>
      <div class="close"></div>
    </div>
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
