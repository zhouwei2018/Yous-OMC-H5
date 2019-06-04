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
      <div class="work_title clearfix pb15 mb10">
        <span class="ys_tit db">建外SOHO A座 2201</span>
        <div>
          <textarea name="" class="attach_text" cols="30" rows="10" placeholder="请输入"></textarea>
        </div>
        <a href="javascript:;" class="ys_sm_btn fr">约见</a>
      </div>
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr mb10">
          <div class="fr mr10">
            <span>选择记录类型 &gt;</span>
          </div>
        </li>
        <li class="clearfix pr">
          <div class="fr mr10">
            <span>@相关人员 &gt;</span>
          </div>
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
