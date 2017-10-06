<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">建筑面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="jzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="yzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商自持面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="kfszcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单层面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="dcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="kzmj" placeholder="请输入">
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
        //面积信息
        zdid: '', //座栋id
        jzmj: '', //建筑面积
        yzmj: '', //业主面积
        kfszcmj: '', //开发商自持面积
        dcmj: '', //单层面积
        kzmj: '', //空置面积
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
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdMj.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000075"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.jzmj = data.jzmj;
            that.yzmj = data.yzmj;
            that.kfszcmj = data.kfszcmj;
            that.kzmj = data.kzmj;
            that.dcmj = data.dcmj;
          }, (res)=>{
            Indicator.close()
          });
      },
      //保存面积信息
      saveAreaMsg(){
        var _this = this;

        if(this.jzmj == ''){
          MessageBox('提示', '请输入建筑面积');
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
              "id": this.zdid, //楼盘id
            },
            "foreEndType": 2,
            "code": "300000074"
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
