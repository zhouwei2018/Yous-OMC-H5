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
          <span class="ys_tit w224">房间面积：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fjmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间结构：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fjjg" placeholder="请输入">
            <i class="right_unit"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间层高：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fjcg" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间面宽：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fjmk" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">房间纵深：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="fjzs" placeholder="请输入">
            <i class="right_unit">m</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" @click="saveStructData" class="ys_default_btn mb80">保存</a>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';

  export default {
    data () {
      return {
          "fyid1":"",
          "fyid": "",
          "lpid":"",
          "zdid":"",
          "fjmj": "",
          "fjjg": "",
          "fjcg": "",
          "fjmk": "",
          "fjzs": ""
      }
    },
    methods: {
        getInitData(){
          const fyid = this.$route.params.fyid;
          this.fyid = fyid;
          const lpid = this.$route.params.lpid;
          this.lpid = lpid;
          const zdid = this.$route.params.zdid;
          this.zdid= zdid;
           
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfygzxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000035"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.lpid=data.lpid;
            that.fjmj = data.fjmj;
            that.fjjg = data.fjjg;
            that.fjcg = data.fjcg;
            that.fjmk = data.fjmk;
            that.fjzs = data.fjzs;
          }, (res)=>{
            Indicator.close()
          });
        },
        saveStructData(){
          var that = this;

          if(!this.fjmj){
            MessageBox('提示', '请输入房间面积');
            return;
          }

          Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
          });

          this.$http.post(
            this.$api + "/yhcms/web/zdfyxx/saveZdgzxx.do", {
                "parameters": {
                  "id": this.fyid,
                  "fjmj": this.fjmj,
                  "fjjg": this.fjjg,
                  "fjcg": this.fjcg,
                  "fjmk": this.fjmk,
                  "fjzs": this.fjzs
                },
               "foreEndType": 2,
               "code": "300000034"
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
              //保存时返回列表页
                that.$router.push({path:'/index'});
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
