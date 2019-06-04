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
  .ys_item_ul li{
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
  .btn-out{
    margin:1.92rem .20rem;
    button{
      width: 3.4rem;
      height: .72rem;
      text-align: center;
      border-radius: .4em;
      background-color: #dddce1;
      border: 0;
      font-size: .26rem;
      &.current{
        color: @cl_white;
        background:@bg_mid_blue ;
      }
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
      <ul class="ys_item_ul">
        <li class="clearfix color_blue">
          <span class="ys_tit nor">查看跟进</span>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201 业主约见谈判</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit nor">第4次约见</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">派单时间</span>
          <span class="">2017-11-12</span><span class="mf36">14:00</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">意向级别</span>
          <div class="ys_item_con fl"><input type="text" value="A" placeholder="18810974444"/></div>
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
      </ul>
      <div class="btn-out clearfix">
        <button class="save current fl">保存</button>
        <button class="initfile fr">派发</button>
      </div>
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
