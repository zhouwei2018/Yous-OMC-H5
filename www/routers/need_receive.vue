<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue{color:@bg_mid_blue}
  .color_black{color:@cl_black}
  .color_grey{color:#a8a8a8}
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
  .statusbtn{
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
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201 已签约</span>
          <span class="arrow color_grey">2017-5-18</span>
        </li>
        <li class="clearfix color_grey">
          <span class="ys_tit">签约时间</span>
          <span class="">2017-11-12</span><span class="mf36">14:00</span>
          <button  class="statusbtn">已接单</button>
        </li>
      </ul>
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
