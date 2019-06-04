<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  input { padding: 0; margin: 0; border: 0; }
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
  .mb20{
    margin-bottom: .20rem;
  }
  .mf36{
    margin-left: .36rem;
  }
  .all_elements{
    font-size: .26rem;
  }
  .ys_item_ul{
    background: #f0eff5;
    li{
      position: relative;
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
          width: inherit;
          &:after {
            content: '';
            display: none;
          }
        }
      }
      .ys_item_con{
        &.input-out{
          height: .72rem;
        }
        input{
          font-size: .26rem;
        }
      }
      .arrow{
        float:right;
        margin-right: .30rem;
      }
      .edit{
        float: right;
        border-radius: .5em;
        margin:.15rem .20rem 0 0;
        width: 1.46rem;
        height: .40rem;
        line-height: .40rem;
        text-align: center;
        border: none;
        background-color:@bg_mid_blue ;
        color: @cl_white;
        font-size: .20rem;
      }
      .ys_item_con{
        input{
          height:inherit;
        }
      }
      &.s-li{
        padding-top: .22rem;
        height: 1.10rem;
        line-height: inherit;
        .title{
          margin-bottom: .24rem;
          line-height: 1em;
        }
        .s-tip{
          font-size: .20rem;
          line-height: 1em;
          color:#999;
        }
        .arrow{
          position: absolute;
          right: 0;
          top:.36rem;
        }
      }
    }
  }
  .ptitle{
    padding-left: .24rem;
    line-height: .72rem;

  }
  .uit-raio{
    position: relative;
    float: left;
    height:.72rem;
    line-height:.72rem;
    &:first-child{
      margin: 0 1.1rem 0 .50rem;
    }
    &.uit-raio:nth-child(2){
      margin-right:.86rem;
    }
  }
  .tear-out{
    background-color: @cl_white;
    border-bottom: 1px solid #dbdadf;
    padding:  .22rem 0;
    textarea{
      display: block;
      min-width:94%;
      max-width:94%;
      margin:0 auto;
      background-color: @cl_white;
      border-radius: .18rem;
      border:.01rem solid #4d4d4d;
    }
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
  .add-button{
    position: relative;
    margin: .80rem auto 3.3rem auto;
    height: .76rem;
    width: .76rem;
    border-radius: .38rem;
    background-color: @bg_mid_blue;
    &:before{
      content: '';
      display: block;
      position: absolute;
      left:50%;
      top:50%;
      margin-left: -.225rem;
      margin-top: -.225rem;
      width: .45rem;
      height: .45rem;
      background: url(../resources/images/plus.png) center center no-repeat;
      background-size: contain;
    }
  }
  @media screen and (max-width: 320px){
    .ys_item_ul li .ys_tit{
      width: 1.45rem!important;
      &.nor {
        width: inherit!important;
        &:after {
          content: '';
          display: none;
        }
      }
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb20">
        <li class="clearfix color_blue">
          <span class="ys_tit nor">查看跟进</span>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix color_blue">
          <span class="ys_tit nor">任务详情</span>
          <span class="arrow">&gt;</span>
        </li>
      </ul>
      <ul class="ys_item_ul">
        <li class="clearfix color_black mb20">
          <span class="">建外SOHO A座 2201</span>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix s-li">
            <p class="title">约见业主</p>
            <p class="s-tip">显示最新一条跟进记录</p>
            <span class="arrow">&gt;</span>
         </li>
        <li class="clearfix s-li">
          <p class="title">收房</p>
          <p class="s-tip">显示最新一条跟进记录</p>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix s-li">
          <p class="title">其他</p>
          <p class="s-tip">显示最新一条跟进记录</p>
          <span class="arrow">&gt;</span>
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
    <div class="add-button"></div>
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
