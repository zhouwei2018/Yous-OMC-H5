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
      <div class="analyse_wrap mb60">

        <div class="analy_item">
          <span class="analy_tit db mb10">房间优势</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="fjys" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间劣势</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="fjls" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">房间硬伤</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="fh" placeholder="请输入"></textarea>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAnalyseData">保存</a>
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
          "fjys": "",
          "fjls": "",
          "fh": ""
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
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfyfxxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{"id":fyid},"foreEndType":2,"code":"300000037"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.fjys = data.fjys;
            that.fjls = data.fjls;
            that.fh = data.fh;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveAnalyseData(){
        var _this = this;

        if(!this.fjys){
          MessageBox('提示', '请输入房间优势');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/zdfyxx/saveZdfx.do",
          {
            "parameters": {
                id: this.id,
                fjys: this.fjys,
                fjls: this.fjls,
                fh: this.fh
            },
            "foreEndType": 2,
            "code": "300000036"
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

    created(){
      document.body.style.backgroundColor = "#fff";
    },
    beforeDestroy(){
      document.body.style.backgroundColor = "#f0eff5";
    },

  }
</script>
