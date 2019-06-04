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
          <span class="ys_tit w224">总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置比例：</span>
          <div class="ys_item_con fl">
            <span class="cl_999">{{kzhbl_t}}</span>
            <i class="right_unit">%</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveLpzdHsh">保存</a>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import { Toast } from 'mint-ui'; //toast
  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    data () {
      return {
          zdid: "",
          lpid: "",
          zdgzid: "",
          zhsh: "",
          kzhsh: "",
          shyhsh: "",
          kzhbl: "",
      }
    },
    methods: {
      getInitData(){
          const zdid = this.$route.params.zdid;
          this.zdid = zdid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdHsh.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000073"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.lpid = data.lpid;
            that.zdgzid = data.zdgzid;
            that.zhsh = data.zhsh;
            that.kzhsh = data.kzhsh;
            that.shyhsh = data.shyhsh;
            that.kzhbl = data.kzhbl;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveLpzdHsh(){
        var _this = this;

        if(!this.zhsh){
            MessageBox('提示', '请填写总户数');
            return;
        }

        if(!this.kzhsh){
            MessageBox('提示', '请填写空置户数');
            return;
        }

        if(!this.shyhsh){
            MessageBox('提示', '请填写商业户数');
            return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdHsh.do",
          {
            "parameters": {
              "id": this.zdid,
              "zhsh": this.zhsh,
              "kzhsh": this.kzhsh,
              "kzhbl": this.kzhbl,
              "shyhsh": this.shyhsh,
            },
            "foreEndType": 2,
            "code": "300000072"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            Toast({
                message: '保存成功',
                position: 'bottom',
                duration: 5000
            });

            setTimeout(function(){
                _this.$router.push({path:'/zuodong_list/'+_this.lpid});
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
    computed:{
        kzhbl_t(){
            const bl = (parseInt(this.kzhsh) / parseInt(this.zhsh) * 100).toFixed(2);
            this.kzhbl = bl;
            return isNaN(bl) ? "" : bl;
        }
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
