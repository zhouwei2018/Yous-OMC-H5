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
  .arrow{
    float:right;
    margin-right: .30rem;
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
  }
  .recording-ul{
    li{
      position: relative;
      margin:0 .20rem 0 1.5rem;
      padding-top: .42rem;
      font-size: .19rem;
      height: 1.36rem;
      border-left:.03rem solid #16abdc;
      .circle{
        position: absolute;
        top:.46rem;
        left:-.15rem;
        width: .26rem;
        height: .26rem;
        border-radius: .13rem;
        background-color: @cl_white;
        border:.03rem solid #16abdc;
        &:before{
          content: '';
          position: absolute;
          left: 50%;
          top:50%;
          margin-left:-.05rem;
          margin-top:-.05rem;
          width: .10rem;
          height: .10rem;
          border-radius: .05rem;
          background-color:#16abdc;
        }
      }
      .date{
        position: absolute;
        top:.46rem;
        left:-1.5rem;
        min-width: 1.12rem;
        height: .26rem;
        color: #16abdc;
      }
      .partment{
        display: inline-block;
        height: .38rem;
        line-height: .38rem;
        border-radius: .19rem;
        background-color: #16abdc;
        padding: 0 .26rem;
        color: #fff;
        position: relative;
        left: .18rem;
        span{
          display: inline-block;
          &:first-child{
            margin-right:.34rem;
          }
        }
      }
      .tip-word{
        height: .38rem;
        line-height: .38rem;
        padding: 0 .26rem;
        color: #373737;
        position: relative;
        left: .18rem;
      }
      &:last-child{
        .whline{
          height: 2rem;
          width:0.04rem;
          position: absolute;
          top: .72rem;
          left: -.032rem;
          z-index: 4;
          background-color: #f0eff5;;
        }
      }
    }
  }
  .add-button{
    position: relative;
    margin: 3.380rem auto 3.3rem auto;
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
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul">
        <li class="clearfix color_blue">
          <span class="ys_tit">我的工单</span>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix ">
          <span class="">建外SOHO A座 2201 业主约见谈判</span>
          <span class="arrow">&gt;</span>
        </li>

      </ul>
      <ul class="recording-ul">
        <li class="list-item">
          <div class="date">2017-06-06</div>
          <div class="circle"></div>
          <div class="partment">
            <span class="part-name">收购部</span>
            <span class="per-name">张三</span>
          </div>
          <p class="tip-word">跟进内容</p>
        </li>
        <li class="list-item">
          <div class="date">2017-06-06</div>
          <div class="circle"></div>
          <div class="partment">
            <span class="part-name">收购部</span>
            <span class="per-name">张三</span>
          </div>
          <p class="tip-word">跟进内容</p>
        </li>
        <li class="list-item">
          <div class="whline"></div>
          <div class="date">2017-06-06</div>
          <div class="circle"></div>
          <div class="partment">
            <span class="part-name">收购部</span>
            <span class="per-name">张三</span>
          </div>
          <p class="tip-word">跟进内容</p>
        </li>
      </ul>
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
