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
      <div class="analyse_wrap mb60">

        <div class="analy_item">
          <span class="analy_tit db mb10">区域亮点</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">未来发展潜力</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">优势分析结果</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">劣势分析结果</span>
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
    }

  }
</script>
