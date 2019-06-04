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
          <span class="ys_tit w224">地上车位数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dshsl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地上车位租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dshxs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地上车位月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dshyue" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dxasl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dxaxs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">地下车位月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dxayue" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" @click="saveParking" class="ys_default_btn mb80">保存</a>
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
         "id":"",
         "lpid": "",
         "dshsl": "",
         "dshxs": "",
         "dshyue": "",
         "dxasl": "",
         "dxaxs": "",
         "dxayue": ""
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
          const url = this.$api + "/yhcms/web/lpjbxx/getLpChw.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000046"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.id=data.id;
            that.dshsl=data.dshsl;
            that.dshxs = data.dshxs;
            that.dshyue = data.dshyue;
            that.dxasl = data.dxasl;
            that.dxaxs = data.dxaxs;
            that.dxayue = data.dxayue;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveParking(){
        var _this = this;

        if(!this.dshsl){
          MessageBox('提示', '请输入地上车位数量');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLpChw.do",
          {
            "parameters": {
                "id":this.id,
                "lpid":this.lpid,
                "dshsl":this.dshsl,
                "dshxs": this.dshxs,
                "dshyue": this.dshyue,
                "dxasl": this.dxasl,
                "dxaxs": this.dxaxs,
                "dxayue": this.dxayue,
            },
            "foreEndType": 2,
            "code": "300000047"
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
