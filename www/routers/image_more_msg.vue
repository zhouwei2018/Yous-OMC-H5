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
      <div class="img_list_wrap">
        <div class="common_title">房源图片</div>
        <div class="image_wrap clearfix">
          <div class="upload_btn mr10 fl"></div>
          <div class="img_demo fl">
            <img class="upload_demo_img" src="../resources/images/demo_img.png" alt="">
          </div>
        </div>
      </div>
      <div class="img_list_wrap">
        <div class="common_title">户型图</div>
        <div class="image_wrap clearfix">
          <div class="upload_btn mr10 fl"></div>
          <div class="img_demo fl">
            <img class="upload_demo_img" src="../resources/images/demo_img.png" alt="">
          </div>
        </div>
      </div>
      <div class="img_list_wrap mb140">
        <div class="common_title">格局图</div>
        <div class="image_wrap clearfix">
          <div class="upload_btn mr10 fl"></div>
          <div class="img_demo fl">
            <img class="upload_demo_img" src="../resources/images/demo_img.png" alt="">
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
  }
</script>
