<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">总建筑面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="zjzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="kfszmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="yzzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="shyzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAreaMsg">保存</a>
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
        lpid: '',
        zjzmj: '',
        kfszmj: '',
        yzzmj: '',
        shyzmj: '',
      }
    },
    methods: {
      getInitData(){
          const lpid = this.$route.params.lpid;
          this.lpid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getLpMj.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000043"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zjzmj = data.zjzmj;
            that.kfszmj = data.kfszmj;
            that.yzzmj = data.yzzmj;
            that.shyzmj = data.shyzmj;
          }, (res)=>{
            Indicator.close()
          });
      },
      //保存面积信息
      saveAreaMsg(){
        var _this = this;

        if(!this.zjzmj){
          MessageBox('提示', '请输入建筑总面积');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLpMj.do",
          {
            "parameters": {
              "lpid": this.lpid,
              "jzzmj": this.zjzmj,
              "kfszmj": this.kfszmj,
              "yzzmj": this.yzzmj,
              "shyzmj": this.shyzmj
            },
            "foreEndType": 2,
            "code": "300000045"
          }
        ).then(function (res) {
          Indicator.close();
          var result = JSON.parse(res.bodyText);
          if (result.success) {
            Toast({
                message: '保存成功',
                position: 'bottom',
                duration: 1000
            });

            setTimeout(function(){
                _this.$router.push({path:'/index'});
            },1000);

          } else {
            Toast({
                message: '保存失败: ' + result.message,
                position: 'bottom'
            });
          }
        }, function (res) {
          Indicator.close();
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
