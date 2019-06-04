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
      <div class="commerce_head clearfix">
        <div class="fl pt10">
          <i class="commerce_icon"></i>
          <span>投资商业地产</span>
        </div>
        <div class="fr status_block_wrap pr">
          <span class="small_icon"></span>
          <div class="status_bg">
            <i class="slide_block"></i>
          </div>
          <span class="strong_icon"></span>
        </div>
      </div>
      <div class="tc add_common_box">
        <a href="javascript:;" class="cl_link f30">+添加物业公司</a>
      </div>

      <a href="javascript:;" class="ys_default_btn mb80">提交</a>
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
