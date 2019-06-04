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
        <li class="clearfix">
          <span class="ys_tit">姓名：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">性别：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="sex">男</label>
            <label ><input type="radio" name="sex">女</label>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">特色标签：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">请选择标签</a></div>
        </li>
        <li class="clearfix bg_gray">
          <span class="ys_tit"></span>
          <div class="ys_item_con fl">
            <span class="ys_tag">老实</span>
            <span class="ys_tag">敦厚</span>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">联系方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_arrow plus"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">微信：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">常驻工作地：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">职业：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">与业主关系：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">有无签约权：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="visa">有</label>
            <label ><input type="radio" name="visa">无</label>
          </div>
        </li>
      </ul>
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
  }
</script>
