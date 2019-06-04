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
        <li class="clearfix pr">
          <span>建外SOHO A座 2201</span>
          <div class="fr mt15 mr20">
            <a href="javascript:;" class="ys_sm_btn">编辑</a>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">约见签约人：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">业主</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">与业主关系：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">亲戚</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">签约人姓名：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">李四</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">联系方式：</span>
          <div class="ys_item_con fl">
           <span class="cl_999">13945787888</span>
          </div>
        </li>
        <li class="clearfix pr mb10">
          <span class="ys_tit">约见时间：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">2017-08-12 14:00</span>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">业主是否有公司：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="company">有</label>
            <label ><input type="radio" name="company">无</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">公司名称：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr mb10">
          <span class="ys_tit">业主业余爱好：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr bg_gray">
          <span class="f24">业主其他房产情况（城市、类型、是否有贷款）</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">其他房产：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="company">有</label>
            <label ><input type="radio" name="company">无</label>
          </div>
          <div class="textarea_wrap">
            <textarea name="" cols="30" rows="10"></textarea>
          </div>
        </li>

        <li class="clearfix bg_gray">
          <span>业主家庭情况</span>
        </li>

        <li class="clearfix pr mb10">
          <span class="ys_tit w224">业主投资定位：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择业主投资定位">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>

        <li class="clearfix pr mb10">
          <span class="ys_tit">合作意向：</span>
          <div class="ys_item_con fl">
            <div class="star_wrap pr">
              <span class="star_gray"></span>
              <span class="star_gold"></span>
            </div>
          </div>
        </li>
      </ul>
      <div class="btn_group clearfix mb80">
        <a href="javascript:;" class="ys_two_btn fl">保存</a>
        <a href="javascript:;" class="ys_two_btn fr btn_gray">签约</a>
      </div>

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
