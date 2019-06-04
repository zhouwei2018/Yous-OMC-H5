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

        <li class="clearfix">
          <span class="ys_tit">有无房本：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" value="1" name="certificate" v-model="fb" :checked="fb==1">有</label>
            <label ><input type="radio" name="certificate" value="0" v-model="fb" :checked="fb==0">无</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">可否注册：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="register" value="1" v-model="zc" :checked="zc==1">是</label>
            <label ><input type="radio" name="register" value="0" v-model="zc" :checked="zc==0">否</label>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveRegData">保存</a>
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
          "id": "",
          "fb": "",
          "zc": "",
          "ba": ""
      }
    },
    methods: {
      getInitData(){
          const fyid = this.$route.params.fyid;
          this.id = fyid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfyZcxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000023"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.fb = data.fb;
            that.zc = data.zc;
            that.ba = data.ba;
          }, (res)=>{
            Indicator.close()
          });
      },
      //保存面积信息
      saveRegData(){
        var _this = this;

        if(this.fb === ''){
          MessageBox('提示', '请选择房本情况');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/zdfyxx/saveZc.do",
          {
            "parameters": {
              "id": this.id,
              "fb": this.fb,
              "zc": this.zc,
              "ba": this.ba,
            },
            "foreEndType": 2,
            "code": "300000022"
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
            //保存注册信息 返回列表
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
