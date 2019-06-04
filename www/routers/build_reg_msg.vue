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
          <span class="ys_tit">有无房本：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="certificate">有</label>
            <label ><input type="radio" name="certificate">无</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">可否注册：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="register">是</label>
            <label ><input type="radio" name="register">否</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">是否备案：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="record">是</label>
            <label ><input type="radio" name="record">否</label>
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
