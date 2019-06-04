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
      <div class="com_tab_wrap clearfix">
        <div class="com_tab_head clearfix bor_bot">
          <div class="fl">按更新时间正序<i class="down_arrow ml5"></i></div>
          <span class="ver_line"></span>
          <div class="fl">筛选<i class="down_arrow ml5"></i></div>
        </div>

        <!--筛选展开列-->
        <div class="sort_item_wrap none">
          <div class="sort_item">按更新时间正序</div>
          <div class="sort_item">按更新时间倒序</div>
          <div class="sort_item">按问题状态</div>
        </div>

        <div class="sort_item_wrap none">
          <div class="sort_item">跟进中</div>
          <div class="sort_item">签约谈判中</div>
          <div class="sort_item">已签约</div>
          <div class="sort_item">已结束</div>
          <div class="sort_item">已暂停</div>
          <div class="sort_item">已停止</div>
        </div>

      </div>

      <!--更单中列表-->

      <div class="attach_list_wrap mt72">
        <ul class="border_top">
          <li class="attach_item clearfix">
            <div class="fl">建外SOHO A座 2201业主</div>
            <div class="fr tr">
              <span>2017-07-21</span>
              <a href="javascript:;" class="db cl_red">跟进中<i class="red_down_arrow ml5"></i></a>
            </div>
          </li>
          <li class="attach_item clearfix">
            <div class="fl">建外SOHO A座 2201业主</div>
            <div class="fr tr">
              <span>2017-07-21</span>
              <a href="javascript:;" class="db cl_red">签约谈判中<i class="red_down_arrow ml5"></i></a>
            </div>
          </li>
          <li class="attach_item clearfix">
            <div class="fl">建外SOHO A座 2201业主</div>
            <div class="fr tr">
              <span>2017-07-21</span>
              <a href="javascript:;" class="db cl_red">已签约<i class="red_down_arrow ml5"></i></a>
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
