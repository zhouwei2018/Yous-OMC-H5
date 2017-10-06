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
        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">市场近期成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="scjqjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="scjqjyzj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>


        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">历史三年成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lssnjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>

        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lssnjyzj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="savePrice">保存</a>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast
  import { Indicator } from 'mint-ui';

  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    data () {
      return {
        zdid: '',
        zdgzid: '',
        scjqjdj: '', //市场近期成交价 单价
        lssnjdj: '', //历史三年成交价 单价
        scjqjyzj: '', //市场近期成交价 月租金
        lssnjyzj: '', //历史三年成交价 月租金
      }
    },
    methods: {
      getInitData(){
          const lpid = this.$route.params.lpid;
          this.zdid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdJg.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000071"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zdgzid = data.zdgzid;
            that.scjqjdj = data.scjqjdj;
            that.lssnjdj = data.lssnjdj;
            that.scjqjyzj = data.scjqjyzj;
            that.lssnjyzj = data.lssnjyzj;
          }, (res)=>{
            Indicator.close()
          });
      },
      savePrice(){
        var _this = this;

        if(!this.scjqjdj){
          MessageBox('提示', '请输入近期成交价');
          return;
        }

        if(!this.lssnjdj){
          MessageBox('提示', '请输入历史三年成交价单价');
          return;
        }

        if(!this.scjqjyzj){
          MessageBox('提示', '请输入市场近期成交价月租金');
          return;
        }

        if(!this.lssnjyzj){
          MessageBox('提示', '请输入历史三年成交价月租金');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdJg.do",
          {
            "parameters": {
              "id": this.zdid,
              "scjqjdj": this.scjqjdj,
              "lssnjdj": this.lssnjdj,
              "scjqjyzj": this.scjqjyzj,
              "lssnjyzj": this.lssnjyzj,
            },
            "foreEndType": 2,
            "code": "300000070"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            Toast({
                message: '保存成功',
                position: 'bottom',
                duration: 1000
            });

            setTimeout(function(){
                _this.$router.push({path:'/list2'});
            },1000);
          } else {
            Toast({
                message: '保存失败: ' + result.message,
                position: 'bottom'
            });
          }
        }, function (res) {
          Toast({
              message: '保存失败! 请稍候再试',
              position: 'bottom'
          });
        });
      }
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
