<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr mb20">
          <span class="ys_tit">看房时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期"  @click="openPicker($event)">
            <i class="calendar_icon" @click="openPicker($event)"></i>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">装修状况：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" value="0" name="decoration">优</label>
            <label class="mr20"><input type="radio" value="1" name="decoration">良</label>
            <label ><input type="radio" value="2" name="decoration">差</label>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">物业对接难易程度：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" value="0" name="wuye">易</label>
            <label class="mr20"><input type="radio" value="1" name="wuye">一般</label>
            <label ><input type="radio" value="2" name="wuye">难</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">工程预算金额：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">物业预算金额：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">工期：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">天</i>
          </div>
        </li>
      </ul>
      <div class="analyse_wrap mb60">
        <div class="analy_item">
          <span class="analy_tit db mb10">备注</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间劣势</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间硬伤</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="ys_default_btn mb80">保存</a>
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

    created(){
      document.body.style.backgroundColor = "#fff";
    },
    beforeDestroy(){
      document.body.style.backgroundColor = "#f0eff5";
    },

  }
</script>
