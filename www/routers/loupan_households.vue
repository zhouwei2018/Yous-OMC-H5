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
            <input type="text" value="" v-model="zhsh" placeholder="自动生成" readonly="readonly">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzzhsh" placeholder="自动生成" readonly="readonly">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kfszhs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="yzzhs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyzhs" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveHouse">保存</a>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast
  import { Indicator } from 'mint-ui';

  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    components: {},

    data () {
      return {
        lpid: '',
        zhsh: '',
        kfszhs: '',
        yzzhs: '',
        shyzhs: '',
        kzzhsh:'',
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
          const url = this.$api + "/yhcms/web/lpjbxx/getLpHs.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"300000042"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zhsh = data.zhsh;
            that.kfszhs = data.kfszhs;
            that.yzzhs = data.yzzhs;
            that.shyzhs = data.shyzhs;
            that.kzzhsh=data.kzzhsh;
          }, (res)=>{
            Indicator.close()
          });
      },
      //保存户数信息
      saveHouse(){
        var _this = this;

        if(!this.kfszhs){
          MessageBox('提示', '请输入开发商总数');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLpHs.do",
          {
            "parameters": {
              "lpid": this.lpid,
              "zhsh": this.zhsh,
              "kfszhs": this.kfszhs,
              "yzzhs": this.yzzhs,
              "shyzhs": this.shyzhs,
              "kzzhsh":this.kzzhsh
            },
            "foreEndType": 2,
            "code": "300000044"
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
