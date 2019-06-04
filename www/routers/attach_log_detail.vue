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
      <div class="work_title cl_link mb10">
        <span class="ys_tit ">我的工单</span>
        <div class="ys_item_con fl">
          <i class="right_arrow">&gt;</i>
        </div>
      </div>
      <ul class="ys_item_ul">
        <li class="clearfix pr">
          <span>建外SOHO A座 2201</span>
          <div class="ys_item_con fl">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
      </ul>

      <div class="log_status_wrap">
        <div class="log_item clearfix">
          <span class="log_date fl ml10">2017-08-12</span>
          <span class="round_wrap fl pr">
            <i class="log_ver_blueline top"></i>
            <i class="circle_icon"></i>
            <i class="log_ver_blueline bot"></i>
          </span>
          <div class="fl pt20">
            <div class="clearfix log_sta_btn mb5">
              <div class="status_per_tit fl">业拓人员</div>
              <div class="status_per_tit fr">张三</div>
            </div>
            <span>跟进内容</span>
          </div>
        </div>

        <div class="log_item clearfix">
          <span class="log_date fl ml10">2017-08-12</span>
          <span class="round_wrap fl pr">
            <i class="log_ver_blueline top"></i>
            <i class="circle_icon"></i>
          </span>
          <div class="fl pt20">
            <div class="clearfix log_sta_btn mb5">
              <div class="status_per_tit fl">业拓人员</div>
              <div class="status_per_tit fr">张三</div>
            </div>
            <span>跟进内容</span>
          </div>
        </div>

      </div>


      <div class="add_more_button"></div>

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
