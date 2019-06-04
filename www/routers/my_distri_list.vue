<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/doc_attach.less";

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

      <!--我派发的列表-->

      <div class="attach_list_wrap">
        <ul>
          <li class="attach_item clearfix pt10">
            <div class="fl distri_block mb5">
              <span class="db">建外SOHO A座 2201 业主约见谈判</span>
              <span class="cl_999 f24">约见时间：<i>2017-08-01 14:00</i></span>
              <span class="db cl_999"><em class="hand_icon mr05"></em>业拓：<i>张三</i></span>
            </div>
            <div class="fr tr cl_999">
              <span>2017-07-21</span>
              <a href="javascript:;" class="db cl_red">已结单</a>
            </div>
          </li>
          <li class="attach_item clearfix pt10">
            <div class="fl distri_block mb5">
              <span class="db">建外SOHO A座 2201 业主约见谈判</span>
              <span class="db cl_999">约见时间：<i class="f24">2017-08-01 14:00</i></span>
              <span class="db cl_999">派单时间：<i class="f24">2017-08-01 14:00</i></span>
              <span class="db cl_999"><em class="hand_icon mr05"></em>业拓：<i>张三</i></span>
            </div>
            <div class="fr tr cl_999">
              <span>2017-07-21</span>
              <a href="javascript:;" class="db cl_red">未结单</a>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <!--遮罩-->
    <div class="ys_mask">

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
