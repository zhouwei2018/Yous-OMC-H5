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
          <span class="analy_tit db mb10">区域亮点</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="qwld" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">未来发展潜力</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="wlfzql" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">优势分析结果</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="ysjg" placeholder="请输入"></textarea>
          </div>
        </div>
        <div class="analy_item">
          <span class="analy_tit db mb10">劣势分析结果</span>
          <div class="analy_content">
            <textarea name="" cols="30" rows="10" v-model="lsjg" placeholder="请输入"></textarea>
          </div>
        </div>

      </div>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAnalyse">保存</a>
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
          lpid: "",
          qwld: "",
          wlfzql: "",
          ysjg: "",
          lsjg: "",
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
          const url = this.$api + "/yhcms/web/lpjbxx/getLpFx.do";
          let that = this;
          this.$http.post(url, {"parameters":{"lpid":lpid},"foreEndType":2,"code":"300000048"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.qwld = data.qwld;
            that.wlfzql = data.wlfzql;
            that.ysjg = data.ysjg;
            that.lsjg = data.lsjg;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveAnalyse(){
        var _this = this;


        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLpFx.do",
          {
            "parameters": {
                "lpid":this.lpid,
                "qwld": this.qwld,
                "wlfzql": this.wlfzql,
                "ysjg": this.ysjg,
                "lsjg": this.lsjg
            },
            "foreEndType": 2,
            "code": "300000049"
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
    }
  }
</script>
