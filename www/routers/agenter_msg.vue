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
      <ul class="ys_item_ul mb20">
        <li class="clearfix pr">
          <span class="ys_tit">张三</span>
          <span class="ys_tit">男</span>
          <span>18834239482</span>
          <i class="right_arrow">&gt;</i>
        </li>
      </ul>
      <div class="tc"><a href="javascript:;" class="cl_link f30">+添加代理人</a></div>
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
