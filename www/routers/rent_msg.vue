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
          <span class="ys_tit w224">租赁部合作方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbhzfs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣比例：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlfybl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣周期：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlfyzq" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部地址：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbaddress" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部电话：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbphone" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveRentMsg">保存</a>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import {Indicator } from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗
  export default {
    components: {
      Toast,
      MessageBox
    },
    data () {
      return {
        "lpid": "",
        "zdgzid": "",
        "sfzlb": "",
        "zlbhzfs": "",
        "zlfybl": "",
        "zlbaddress": "",
        "zlbphone": "",
        "zlfyzq": ""
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
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdZlb.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000069"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zdgzid = data.zdgzid;
            that.sfzlb = data.sfzlb;
            that.zlbhzfs = data.zlbhzfs;
            that.zlfybl = data.zlfybl;
            that.zlbaddress = data.zlbaddress;
            that.zlbphone = data.zlbphone;
            that.zlfyzq = data.zlfyzq;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveRentMsg(){
        var _this = this;
        if(!this.zlbhzfs){
          MessageBox('提示', '请输入租赁部合作方式!');
          return;
        }else if(!this.zlfybl){
          MessageBox('提示', '请输入租赁返佣比例!');
          return;
        }else if(!this.zlfyzq){
          MessageBox('提示', '请输入租赁返佣周期!');
          return;
        }else if(!this.zlbaddress){
          MessageBox('提示', '请输入租赁部地址!');
          return;
        }else if(!this.zlbphone){
          MessageBox('提示', '请输入租赁部电话!');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdZlb.do",
          {
            "parameters": {
              "id": this.lpid,
              "sfzlb": this.sfzlb,
              "zlbhzfs": this.zlbhzfs,
              "zlfybl": this.zlfybl,
              "zlbaddress": this.zlbaddress,
              "zlbphone": this.zlbphone,
              "zlfyzq": this.zlfyzq,
            },
            "foreEndType": 2,
            "code": "300000068"
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
