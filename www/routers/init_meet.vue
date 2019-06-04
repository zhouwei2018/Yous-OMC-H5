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
      margin: 0 .6rem 0 .50rem;
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
      <ul class="ys_item_ul mb20">
        <li class="clearfix">
          <span class="ys_tit nor">约见签约人：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc1">
              <label for="zc1">业主</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc2">
              <label for="zc2">业主代理人</label>
            </div>
          </div>
        </li>
      </ul>
      <ul class="ys_item_ul">
        <li class="clearfix">
          <span class="ys_tit">签约人姓名</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入签约人姓名"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">联系方式</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入联系方式"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见时间</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择约见时间"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见次数</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入约见次数"/></div>
        </li>
      </ul>

      <div class="btn-out clearfix">
        <button class="save current fl">提交</button>
        <button class="initfile fr">加入日程</button>
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
